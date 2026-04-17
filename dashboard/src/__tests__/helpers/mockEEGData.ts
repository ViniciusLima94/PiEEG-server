/**
 * Shared test helpers for EEG mock data used across hook & component tests.
 */
import type { EEGData } from "../../types";

const DEFAULT_NUM_CHANNELS = 8;
const DEFAULT_BUFFER_SIZE = 1024;

/**
 * Create a mock EEGData object with pre-filled ring buffers.
 * Optionally fill channel buffers with a sine wave at the given frequency.
 */
export function createMockEEGData(opts: {
  numChannels?: number;
  bufferSize?: number;
  sineFrequency?: number;
  sineAmplitude?: number;
  sampleRate?: number;
  samplesWritten?: number;
} = {}): EEGData {
  const {
    numChannels = DEFAULT_NUM_CHANNELS,
    bufferSize = DEFAULT_BUFFER_SIZE,
    sineFrequency = 10,
    sineAmplitude = 50,
    sampleRate = 250,
    samplesWritten,
  } = opts;

  const buffers: Float32Array[] = [];
  const nSamples = samplesWritten ?? bufferSize;

  for (let ch = 0; ch < numChannels; ch++) {
    const buf = new Float32Array(bufferSize);
    for (let i = 0; i < nSamples; i++) {
      buf[i % bufferSize] =
        sineAmplitude * Math.sin((2 * Math.PI * sineFrequency * i) / sampleRate);
    }
    buffers.push(buf);
  }

  const writeIndex = nSamples % bufferSize;

  return {
    buffers: { current: buffers },
    writeIndex: { current: writeIndex },
    samplesInBuffer: { current: Math.min(nSamples, bufferSize) },
    bufferSize,
    numChannels,
    gridSuspended: false,
  } as EEGData;
}

/**
 * Create a flat-signal (all zeros) mock EEGData.
 */
export function createFlatEEGData(numChannels = DEFAULT_NUM_CHANNELS, bufferSize = DEFAULT_BUFFER_SIZE): EEGData {
  return createMockEEGData({
    numChannels,
    bufferSize,
    sineAmplitude: 0,
  });
}
