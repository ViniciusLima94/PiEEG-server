import { describe, it, expect, vi, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useRelax } from "../../hooks/detectors/useRelax";
import { createMockEEGData } from "../helpers/mockEEGData";

describe("useRelax", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("returns initial state with zero relaxation", () => {
    const eeg = createMockEEGData();
    const { result } = renderHook(() => useRelax(eeg));

    expect(result.current.state.current.relaxation).toBe(0);
    expect(result.current.state.current.alphaRelative).toBe(0);
    expect(result.current.state.current.thetaBetaRatio).toBe(0);
    expect(result.current.state.current.calibrated).toBe(false);
  });

  it("alpha-dominant signal produces higher relaxation", () => {
    vi.useFakeTimers();

    // 10 Hz alpha signal — should yield high relaxation
    const eeg = createMockEEGData({ sineFrequency: 10, sineAmplitude: 100 });
    const { result } = renderHook(() =>
      useRelax(eeg, { updateHz: 10, smoothing: 0 }),
    );

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current.state.current.alphaRelative).toBeGreaterThan(0);
  });

  it("alpha-dominant signal has higher relaxation than beta-dominant", () => {
    vi.useFakeTimers();

    const eegAlpha = createMockEEGData({ sineFrequency: 10, sineAmplitude: 100 });
    const { result: alphaResult } = renderHook(() =>
      useRelax(eegAlpha, { updateHz: 10, smoothing: 0 }),
    );

    const eegBeta = createMockEEGData({ sineFrequency: 25, sineAmplitude: 100 });
    const { result: betaResult } = renderHook(() =>
      useRelax(eegBeta, { updateHz: 10, smoothing: 0 }),
    );

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(alphaResult.current.state.current.alphaRelative).toBeGreaterThan(
      betaResult.current.state.current.alphaRelative,
    );
  });

  it("resetCalibration resets state", () => {
    const eeg = createMockEEGData();
    const { result } = renderHook(() => useRelax(eeg));

    act(() => {
      result.current.resetCalibration();
    });

    expect(result.current.state.current.relaxation).toBe(0);
    expect(result.current.state.current.calibrated).toBe(false);
  });

  it("cleans up on unmount", () => {
    vi.useFakeTimers();
    const clearIntervalSpy = vi.spyOn(globalThis, "clearInterval");
    const eeg = createMockEEGData();
    const { unmount } = renderHook(() => useRelax(eeg));
    unmount();
    expect(clearIntervalSpy).toHaveBeenCalled();
    clearIntervalSpy.mockRestore();
  });
});
