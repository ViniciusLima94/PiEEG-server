"""
Low-level hardware interface for PiEEG.

Manages one or two ADS1299 ADC chips via SPI (8 channels each)
and GPIO lines for chip-select and data-ready signaling.

Requires: spidev (pip), Linux GPIO chardev (kernel, no pip package needed)
Must run on Raspberry Pi with SPI enabled and PiEEG shield connected.
"""

import logging
import os
import struct
import sys

try:
    import fcntl
except ImportError:
    fcntl = None

logger = logging.getLogger("pieeg.hardware")

try:
    import spidev
except ImportError:
    spidev = None


def _require_hardware_libs():
    if spidev is None:
        print(
            "\n  ERROR: Missing hardware library: spidev\n\n"
            "  This is a Raspberry Pi-only package.\n"
            "  Install it inside the project venv:\n"
            "    cd PiEEG-server && ./setup.sh\n\n"
            "  Or for testing without hardware:\n"
            "    pieeg-server --mock\n",
            file=sys.stderr,
        )
        sys.exit(1)


WHO_I_AM = 0x00
CONFIG1 = 0x01
CONFIG2 = 0x02
CONFIG3 = 0x03
CH1SET = 0x05
CH2SET = 0x06
CH3SET = 0x07
CH4SET = 0x08
CH5SET = 0x09
CH6SET = 0x0A
CH7SET = 0x0B
CH8SET = 0x0C

CMD_WAKEUP = 0x02
CMD_RESET = 0x06
CMD_START = 0x08
CMD_STOP = 0x0A
CMD_RDATAC = 0x10
CMD_SDATAC = 0x11
CMD_RDATA = 0x12

SIGN_TEST = 0x7FFFFF
FULL_SCALE = 0xFFFFFF
FULL_SCALE_PLUS_1 = 16777215
NEGATIVE_OFFSET = 16777214
VREF_UV = 4.5e6

CS_PIN = 19
DRDY_PIN = 26
DRDY_PIN_2 = 13
BUTTON_PIN = 17

SPI_SPEED_HZ = 4_000_000
SPI_MODE = 0b01
SPI_BITS = 8
BYTES_PER_READ = 27

EXPECTED_STATUS = (192, 0, 8)

SPIKE_THRESHOLD = 5000
SPIKE_RESET_AFTER = 50

_GPIO_GET_LINEHANDLE = 0xC16CB403
_GPIOHANDLE_GET_VALUES = 0xC040B408
_GPIOHANDLE_SET_VALUES = 0xC040B409
_GPIOHANDLE_REQUEST_INPUT = 1 << 0
_GPIOHANDLE_REQUEST_OUTPUT = 1 << 1
_HANDLE_REQUEST_SIZE = 364
_HANDLE_DATA_SIZE = 64


class PiEEGHardware:
    CH_REGS = (CH1SET, CH2SET, CH3SET, CH4SET, CH5SET, CH6SET, CH7SET, CH8SET)

    def __init__(self, gpio_chip: str = "/dev/gpiochip4", num_channels: int = 16):
        if num_channels not in (8, 16):
            raise ValueError(f"num_channels must be 8 or 16, got {num_channels}")
        self._num_channels = num_channels
        self._gpio_chip_name = gpio_chip
        self._chip_fd = -1
        self._cs_fd = -1
        self._drdy_fd = -1
        self._drdy2_fd = -1
        self._button_fd = -1  # file descriptor for button GPIO line
        self._spi1 = None
        self._spi2 = None
        self._last_valid_value: int | None = None
        self._spike_count = 0
        self._consecutive_rejects = 0
        self._spike_threshold = SPIKE_THRESHOLD
        self._spike_reset_after = SPIKE_RESET_AFTER
        self._register_state: dict[int, int] = {}

    @property
    def num_channels(self) -> int:
        return self._num_channels

    @property
    def spike_threshold(self) -> int:
        return self._spike_threshold

    @spike_threshold.setter
    def spike_threshold(self, value: int):
        v = int(value)
        self._spike_threshold = v if v == -1 else max(0, v)

    @property
    def spike_reset_after(self) -> int:
        return self._spike_reset_after

    @spike_reset_after.setter
    def spike_reset_after(self, value: int):
        self._spike_reset_after = max(1, int(value))

    def open(self):
        _require_hardware_libs()
        self._init_gpio()
        self._init_spi()
        self._configure_adc(chip_num=1)
        if self._num_channels == 16:
            self._configure_adc(chip_num=2)

    def close(self):
        if self._spi1:
            self._spi1.close()
        if self._spi2 and self._num_channels == 16:
            self._spi2.close()
        if self._cs_fd >= 0:
            os.close(self._cs_fd)
            self._cs_fd = -1
        if self._drdy_fd >= 0:
            os.close(self._drdy_fd)
            self._drdy_fd = -1
        if self._drdy2_fd >= 0:
            os.close(self._drdy2_fd)
            self._drdy2_fd = -1
        if self._button_fd >= 0:
            os.close(self._button_fd)
            self._button_fd = -1
        if self._chip_fd >= 0:
            os.close(self._chip_fd)
            self._chip_fd = -1

    def __enter__(self):
        self.open()
        return self

    def __exit__(self, *exc):
        self.close()

    def read_sample(self):
        raw1 = self._spi1.readbytes(BYTES_PER_READ)

        if self._num_channels == 16:
            self._wait_drdy2()
            self._cs_set(0)
            raw2 = self._spi2.readbytes(BYTES_PER_READ)
            self._cs_set(1)

            if not self._is_valid_frame(raw2):
                return None

            if (raw2[0], raw2[1], raw2[2]) != EXPECTED_STATUS:
                return None

            channels = []
            channels.extend(self._decode_channels(raw1))
            channels.extend(self._decode_channels(raw2))
            return channels
        else:
            if not self._is_valid_frame(raw1):
                return None
            channels = self._decode_channels(raw1)
            return channels

    def _is_valid_frame(self, raw: list[int]) -> bool:
        if self._spike_threshold == -1:
            return True

        combined = (raw[24] << 16) | (raw[25] << 8) | raw[26]
        if raw[24] & 0x80:
            combined -= 1 << 24

        if self._last_valid_value is None:
            self._last_valid_value = combined
            return False

        if abs(combined - self._last_valid_value) > self._spike_threshold:
            self._spike_count += 1
            self._consecutive_rejects += 1
            if self._consecutive_rejects >= self._spike_reset_after:
                logger.info(
                    "Spike filter reset after %d consecutive rejects "
                    "(old=%d, new=%d)",
                    self._consecutive_rejects,
                    self._last_valid_value,
                    combined,
                )
                self._last_valid_value = combined
                self._consecutive_rejects = 0
                return True
            logger.debug("Spike detected (count: %d)", self._spike_count)
            return False

        self._last_valid_value = combined
        self._consecutive_rejects = 0
        return True

    def wait_for_drdy(self):
        return self._drdy_get() == 1

    def configure_registers(self, reg_map: dict[int, int]):
        chips = [1, 2] if self._num_channels == 16 else [1]
        for chip in chips:
            self._send_command(chip, CMD_STOP)
            self._send_command(chip, CMD_SDATAC)
            for addr, value in reg_map.items():
                self._write_register(chip, int(addr), int(value) & 0xFF)
            self._send_command(chip, CMD_RDATAC)
            self._send_command(chip, CMD_START)
        self._register_state.update(reg_map)
        self._last_valid_value = None
        self._consecutive_rejects = 0
        logger.info(
            "Registers configured: %s", {hex(k): hex(v) for k, v in reg_map.items()}
        )

    def set_input_short(self):
        reg_map = {reg: 0x01 for reg in self.CH_REGS}
        self.configure_registers(reg_map)

    def set_input_normal(self):
        reg_map = {reg: 0x00 for reg in self.CH_REGS}
        self.configure_registers(reg_map)

    @property
    def register_state(self) -> dict[int, int]:
        return dict(self._register_state)

    def _cs_set(self, value: int):
        buf = bytearray(_HANDLE_DATA_SIZE)
        buf[0] = value & 1
        fcntl.ioctl(self._cs_fd, _GPIOHANDLE_SET_VALUES, buf)

    def _drdy_get(self) -> int:
        buf = bytearray(_HANDLE_DATA_SIZE)
        fcntl.ioctl(self._drdy_fd, _GPIOHANDLE_GET_VALUES, buf)
        return buf[0]

    def _drdy2_get(self) -> int:
        buf = bytearray(_HANDLE_DATA_SIZE)
        fcntl.ioctl(self._drdy2_fd, _GPIOHANDLE_GET_VALUES, buf)
        return buf[0]

    def _wait_drdy2(self):
        while self._drdy2_get() == 0:
            pass
        while self._drdy2_get() == 1:
            pass

    def _init_gpio(self):
        logger.info("Opening GPIO chip %s", self._gpio_chip_name)
        self._chip_fd = os.open(self._gpio_chip_name, os.O_RDWR | os.O_CLOEXEC)

        self._cs_fd = self._request_line(
            self._chip_fd,
            CS_PIN,
            _GPIOHANDLE_REQUEST_OUTPUT,
            default_value=1,
            consumer=b"pieeg_cs",
        )

        self._drdy_fd = self._request_line(
            self._chip_fd, DRDY_PIN, _GPIOHANDLE_REQUEST_INPUT, consumer=b"pieeg_drdy"
        )

        if self._num_channels == 16:
            self._drdy2_fd = self._request_line(
                self._chip_fd,
                DRDY_PIN_2,
                _GPIOHANDLE_REQUEST_INPUT,
                consumer=b"pieeg_drdy2",
            )

        self._init_button()

    def _init_button(self):
        """Initialize button input pin (GPIO 17)."""
        self._button_fd = self._request_line(
            self._chip_fd, BUTTON_PIN, _GPIOHANDLE_REQUEST_INPUT, consumer=b"button"
        )

    def read_button(self) -> int:
        """Read the button pin. Returns 1 when pressed (high), 0 otherwise."""
        buf = bytearray(_HANDLE_DATA_SIZE)
        fcntl.ioctl(self._button_fd, _GPIOHANDLE_GET_VALUES, buf)
        logger.warning("DEBUG button buf[0]=%s type=%s", buf[0], type(buf[0]))
        return buf[0]

    @staticmethod
    def _request_line(
        chip_fd: int,
        pin: int,
        flags: int,
        default_value: int = 0,
        consumer: bytes = b"pieeg",
    ) -> int:
        buf = bytearray(_HANDLE_REQUEST_SIZE)
        struct.pack_into("I", buf, 0, pin)
        struct.pack_into("I", buf, 256, flags)
        buf[260] = default_value & 1
        label = consumer[:32]
        buf[324 : 324 + len(label)] = label
        struct.pack_into("I", buf, 356, 1)
        fcntl.ioctl(chip_fd, _GPIO_GET_LINEHANDLE, buf)
        return struct.unpack_from("i", buf, 360)[0]

    def _init_spi(self):
        self._spi1 = spidev.SpiDev()
        self._spi1.open(0, 0)
        self._spi1.max_speed_hz = SPI_SPEED_HZ
        self._spi1.lsbfirst = False
        self._spi1.mode = SPI_MODE
        self._spi1.bits_per_word = SPI_BITS

        if self._num_channels == 16:
            self._spi2 = spidev.SpiDev()
            self._spi2.open(0, 1)
            self._spi2.max_speed_hz = SPI_SPEED_HZ
            self._spi2.lsbfirst = False
            self._spi2.mode = SPI_MODE
            self._spi2.bits_per_word = SPI_BITS

    def _send_command(self, chip_num: int, command: int):
        if chip_num == 1:
            self._spi1.xfer([command])
        else:
            self._cs_set(0)
            self._spi2.xfer([command])
            self._cs_set(1)

    def _write_register(self, chip_num: int, register: int, value: int):
        data = [0x40 | register, 0x00, value]
        if chip_num == 1:
            self._spi1.xfer(data)
        else:
            self._cs_set(0)
            self._spi2.xfer(data)
            self._cs_set(1)

    def _configure_adc(self, chip_num: int):
        self._send_command(chip_num, CMD_WAKEUP)
        self._send_command(chip_num, CMD_STOP)
        self._send_command(chip_num, CMD_RESET)
        self._send_command(chip_num, CMD_SDATAC)

        self._write_register(chip_num, 0x14, 0x80)
        self._write_register(chip_num, CONFIG1, 0x96)
        self._write_register(chip_num, CONFIG2, 0xD4)
        self._write_register(chip_num, CONFIG3, 0xFF)
        self._write_register(chip_num, 0x04, 0x00)
        self._write_register(chip_num, 0x0D, 0x00)
        self._write_register(chip_num, 0x0E, 0x00)
        self._write_register(chip_num, 0x0F, 0x00)
        self._write_register(chip_num, 0x10, 0x00)
        self._write_register(chip_num, 0x11, 0x00)
        self._write_register(chip_num, 0x15, 0x20)
        self._write_register(chip_num, 0x17, 0x00)

        for ch_reg in (CH1SET, CH2SET, CH3SET, CH4SET, CH5SET, CH6SET, CH7SET, CH8SET):
            self._write_register(chip_num, ch_reg, 0x00)

        self._send_command(chip_num, CMD_RDATAC)
        self._send_command(chip_num, CMD_START)

    @staticmethod
    def _decode_channels(raw: list[int]) -> list[float]:
        channels = []
        for i in range(3, 25, 3):
            raw_val = (raw[i] << 16) | (raw[i + 1] << 8) | raw[i + 2]

            if raw_val | SIGN_TEST == FULL_SCALE:
                signed_val = raw_val - NEGATIVE_OFFSET
            else:
                signed_val = raw_val

            uv = round(VREF_UV * (signed_val / FULL_SCALE_PLUS_1), 2)
            channels.append(uv)

        return channels
