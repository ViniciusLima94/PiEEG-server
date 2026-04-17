import { describe, it, expect } from "vitest";
import { FftEngine, FREQUENCY_BANDS } from "../../lib/fftEngine";

const N = 256;
const SR = 250;

function makeSine(freq: number, amplitude: number, n: number, sr: number): Float64Array {
  const buf = new Float64Array(n);
  for (let i = 0; i < n; i++) {
    buf[i] = amplitude * Math.sin((2 * Math.PI * freq * i) / sr);
  }
  return buf;
}

describe("FftEngine", () => {
  it("throws on non-power-of-2 size", () => {
    expect(() => new FftEngine(100, SR)).toThrow("power of 2");
  });

  it("throws on zero size", () => {
    expect(() => new FftEngine(0, SR)).toThrow();
  });

  it("constructs with valid power-of-2", () => {
    const engine = new FftEngine(N, SR);
    expect(engine.n).toBe(N);
    expect(engine.sampleRateHz).toBe(SR);
  });

  it("returns null when fewer samples than FFT size", () => {
    const engine = new FftEngine(N, SR);
    const short = new Float64Array(100);
    expect(engine.analyse(short)).toBeNull();
  });

  it("detects dominant frequency of a pure sine wave", () => {
    const engine = new FftEngine(N, SR);
    const freq = 10; // 10 Hz — alpha band
    const signal = makeSine(freq, 50, N, SR);
    const result = engine.analyse(signal, 0);

    expect(result).not.toBeNull();
    // Dominant frequency should be within ±1 Hz of the input
    expect(result!.dominantFrequency).toBeGreaterThanOrEqual(freq - 1);
    expect(result!.dominantFrequency).toBeLessThanOrEqual(freq + 1);
  });

  it("places alpha band power for a 10 Hz sine", () => {
    const engine = new FftEngine(N, SR);
    const signal = makeSine(10, 100, N, SR);
    const result = engine.analyse(signal, 0)!;

    // Alpha (8-13 Hz) should dominate
    const alpha = result.bandPowers["Alpha"];
    const delta = result.bandPowers["Delta"];
    const theta = result.bandPowers["Theta"];
    const beta = result.bandPowers["Beta"];

    expect(alpha).toBeGreaterThan(delta);
    expect(alpha).toBeGreaterThan(theta);
    expect(alpha).toBeGreaterThan(beta);
  });

  it("returns band powers for all 5 standard bands", () => {
    const engine = new FftEngine(N, SR);
    const signal = makeSine(10, 50, N, SR);
    const result = engine.analyse(signal, 0)!;

    for (const band of FREQUENCY_BANDS) {
      expect(result.bandPowers[band.name]).toBeDefined();
      expect(result.bandPowers[band.name]).toBeGreaterThanOrEqual(0);
    }
  });

  it("totalPower is positive for non-zero signal", () => {
    const engine = new FftEngine(N, SR);
    const signal = makeSine(20, 50, N, SR);
    const result = engine.analyse(signal, 0)!;

    expect(result.totalPower).toBeGreaterThan(0);
  });

  it("totalPower is near-zero for zero signal", () => {
    const engine = new FftEngine(N, SR);
    const signal = new Float64Array(N); // all zeros
    const result = engine.analyse(signal, 0)!;

    expect(result.totalPower).toBeLessThan(1e-10);
  });

  it("PSD length is N/2 + 1 (one-sided)", () => {
    const engine = new FftEngine(N, SR);
    const signal = makeSine(10, 50, N, SR);
    const result = engine.analyse(signal, 0)!;

    expect(result.psd.length).toBe(N / 2 + 1);
    expect(result.frequencies.length).toBe(N / 2 + 1);
  });

  it("frequency axis spans 0 to Nyquist", () => {
    const engine = new FftEngine(N, SR);
    const signal = makeSine(10, 50, N, SR);
    const result = engine.analyse(signal, 0)!;

    expect(result.frequencies[0]).toBe(0);
    expect(result.frequencies[result.frequencies.length - 1]).toBe(SR / 2);
  });

  it("uses offset parameter correctly", () => {
    const engine = new FftEngine(N, SR);
    // Place a 10 Hz sine starting at offset 100
    const signal = new Float64Array(N + 100);
    const sine = makeSine(10, 50, N, SR);
    signal.set(sine, 100);

    const result = engine.analyse(signal, 100);
    expect(result).not.toBeNull();
    expect(result!.dominantFrequency).toBeGreaterThanOrEqual(9);
    expect(result!.dominantFrequency).toBeLessThanOrEqual(11);
  });

  it("default offset selects last N samples", () => {
    const engine = new FftEngine(N, SR);
    // Prepend noise, then add a clean 10 Hz sine at the tail
    const total = N * 2;
    const signal = new Float64Array(total);
    const sine = makeSine(10, 100, N, SR);
    signal.set(sine, N); // last N samples

    const result = engine.analyse(signal)!;
    expect(result.dominantFrequency).toBeGreaterThanOrEqual(9);
    expect(result.dominantFrequency).toBeLessThanOrEqual(11);
  });

  describe("analyseRing", () => {
    it("returns null when ring has fewer than N samples", () => {
      const engine = new FftEngine(N, SR);
      const ring = new Float32Array(512);
      expect(engine.analyseRing(ring, 100, N - 1)).toBeNull();
    });

    it("analyses a ring buffer correctly", () => {
      const engine = new FftEngine(N, SR);
      const bufSize = 1024;
      const ring = new Float32Array(bufSize);

      // Write a 10 Hz sine into the ring buffer
      const sine = makeSine(10, 50, N, SR);
      const writeIndex = 400;
      for (let i = 0; i < N; i++) {
        ring[(writeIndex - N + i + bufSize) % bufSize] = sine[i];
      }

      const result = engine.analyseRing(ring, writeIndex, N);
      expect(result).not.toBeNull();
      expect(result!.dominantFrequency).toBeGreaterThanOrEqual(9);
      expect(result!.dominantFrequency).toBeLessThanOrEqual(11);
    });

    it("handles ring buffer wrap-around", () => {
      const engine = new FftEngine(N, SR);
      const bufSize = 512;
      const ring = new Float32Array(bufSize);

      // Write index near the start, so data wraps around the end
      const writeIndex = 50;
      const sine = makeSine(20, 80, N, SR);
      for (let i = 0; i < N; i++) {
        ring[(writeIndex - N + i + bufSize) % bufSize] = sine[i];
      }

      const result = engine.analyseRing(ring, writeIndex, N);
      expect(result).not.toBeNull();
      expect(result!.dominantFrequency).toBeGreaterThanOrEqual(19);
      expect(result!.dominantFrequency).toBeLessThanOrEqual(21);
    });
  });

  describe("FREQUENCY_BANDS", () => {
    it("has 5 bands", () => {
      expect(FREQUENCY_BANDS).toHaveLength(5);
    });

    it("bands cover expected names", () => {
      const names = FREQUENCY_BANDS.map((b) => b.name);
      expect(names).toEqual(["Delta", "Theta", "Alpha", "Beta", "Gamma"]);
    });

    it("bands are contiguous and ascending", () => {
      for (let i = 0; i < FREQUENCY_BANDS.length - 1; i++) {
        expect(FREQUENCY_BANDS[i].high).toBe(FREQUENCY_BANDS[i + 1].low);
      }
    });

    it("first band starts at 0.5 Hz", () => {
      expect(FREQUENCY_BANDS[0].low).toBe(0.5);
    });

    it("last band ends at 100 Hz", () => {
      expect(FREQUENCY_BANDS[FREQUENCY_BANDS.length - 1].high).toBe(100);
    });
  });

  describe("different FFT sizes", () => {
    it("works with FFT size 64", () => {
      const engine = new FftEngine(64, SR);
      const signal = makeSine(10, 50, 64, SR);
      const result = engine.analyse(signal, 0);
      expect(result).not.toBeNull();
      expect(result!.totalPower).toBeGreaterThan(0);
    });

    it("works with FFT size 512", () => {
      const engine = new FftEngine(512, SR);
      const signal = makeSine(10, 50, 512, SR);
      const result = engine.analyse(signal, 0);
      expect(result).not.toBeNull();
    });
  });

  describe("multi-tone signals", () => {
    it("detects dominant band in a mixed signal", () => {
      const engine = new FftEngine(N, SR);
      // Strong alpha (10 Hz) + weak beta (20 Hz)
      const signal = new Float64Array(N);
      const alpha = makeSine(10, 100, N, SR);
      const beta = makeSine(20, 10, N, SR);
      for (let i = 0; i < N; i++) signal[i] = alpha[i] + beta[i];

      const result = engine.analyse(signal, 0)!;
      expect(result.bandPowers["Alpha"]).toBeGreaterThan(result.bandPowers["Beta"]);
    });
  });
});
