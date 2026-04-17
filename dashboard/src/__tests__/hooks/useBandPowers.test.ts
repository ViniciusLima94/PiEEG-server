import { describe, it, expect, vi, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useBandPowers } from "../../hooks/detectors/useBandPowers";
import { createMockEEGData, createFlatEEGData } from "../helpers/mockEEGData";

describe("useBandPowers", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("returns initial empty result", () => {
    const eeg = createMockEEGData();
    const { result } = renderHook(() => useBandPowers(eeg));

    // Initial result — power should be zero before any interval fires
    expect(result.current.current.totalPower).toBe(0);
  });

  it("computes band powers after interval fires", () => {
    vi.useFakeTimers();
    const eeg = createMockEEGData({ sineFrequency: 10, sineAmplitude: 100 });
    const { result } = renderHook(() => useBandPowers(eeg, { updateHz: 10 }));

    // Advance timer to trigger at least one update
    act(() => {
      vi.advanceTimersByTime(200);
    });

    const bp = result.current.current;
    expect(bp.totalPower).toBeGreaterThan(0);
    expect(bp.absolute.Alpha).toBeGreaterThan(0);
  });

  it("alpha dominates for 10 Hz signal", () => {
    vi.useFakeTimers();
    const eeg = createMockEEGData({ sineFrequency: 10, sineAmplitude: 100 });
    const { result } = renderHook(() => useBandPowers(eeg, { updateHz: 10 }));

    act(() => {
      vi.advanceTimersByTime(200);
    });

    const bp = result.current.current;
    expect(bp.absolute.Alpha).toBeGreaterThan(bp.absolute.Delta);
    expect(bp.absolute.Alpha).toBeGreaterThan(bp.absolute.Theta);
    expect(bp.absolute.Alpha).toBeGreaterThan(bp.absolute.Beta);
  });

  it("computes relative powers that sum roughly to 1", () => {
    vi.useFakeTimers();
    const eeg = createMockEEGData({ sineFrequency: 10, sineAmplitude: 100 });
    const { result } = renderHook(() => useBandPowers(eeg, { updateHz: 10 }));

    act(() => {
      vi.advanceTimersByTime(200);
    });

    const rel = result.current.current.relative;
    const sum = Object.values(rel).reduce((a, b) => a + b, 0);
    // Relative powers should sum to approximately 1
    expect(sum).toBeGreaterThan(0.9);
    expect(sum).toBeLessThan(1.1);
  });

  it("returns zero for flat signal", () => {
    vi.useFakeTimers();
    const eeg = createFlatEEGData();
    const { result } = renderHook(() => useBandPowers(eeg, { updateHz: 10 }));

    act(() => {
      vi.advanceTimersByTime(200);
    });

    const bp = result.current.current;
    expect(bp.totalPower).toBeLessThan(1e-10);
  });

  it("respects channel selection", () => {
    vi.useFakeTimers();
    // Only channel 0 has signal, rest are flat
    const eeg = createMockEEGData({ numChannels: 8, sineFrequency: 10 });
    // Zero out channels 1-7
    for (let ch = 1; ch < 8; ch++) {
      eeg.buffers.current[ch].fill(0);
    }

    const { result } = renderHook(() =>
      useBandPowers(eeg, { updateHz: 10, channels: [0] }),
    );

    act(() => {
      vi.advanceTimersByTime(200);
    });

    // Should have power from channel 0 only
    expect(result.current.current.totalPower).toBeGreaterThan(0);
  });

  it("cleans up interval on unmount", () => {
    vi.useFakeTimers();
    const clearIntervalSpy = vi.spyOn(globalThis, "clearInterval");
    const eeg = createMockEEGData();
    const { unmount } = renderHook(() => useBandPowers(eeg));

    unmount();
    expect(clearIntervalSpy).toHaveBeenCalled();
    clearIntervalSpy.mockRestore();
  });
});
