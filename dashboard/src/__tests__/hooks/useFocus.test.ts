import { describe, it, expect, vi, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useFocus } from "../../hooks/detectors/useFocus";
import { createMockEEGData } from "../helpers/mockEEGData";

describe("useFocus", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("returns initial state with zero focus", () => {
    const eeg = createMockEEGData();
    const { result } = renderHook(() => useFocus(eeg));

    expect(result.current.state.current.focus).toBe(0);
    expect(result.current.state.current.raw).toBe(0);
    expect(result.current.state.current.calibrated).toBe(false);
  });

  it("computes focus after interval fires", () => {
    vi.useFakeTimers();
    // 25 Hz = beta band — should produce high focus
    const eeg = createMockEEGData({ sineFrequency: 25, sineAmplitude: 100 });
    const { result } = renderHook(() => useFocus(eeg, { updateHz: 10 }));

    act(() => {
      vi.advanceTimersByTime(500);
    });

    // With beta-dominant signal, focus should be > 0
    expect(result.current.state.current.raw).toBeGreaterThan(0);
  });

  it("low-frequency signal produces lower focus than high-frequency", () => {
    vi.useFakeTimers();

    // Alpha-dominant signal (10 Hz) — low focus
    const eegAlpha = createMockEEGData({ sineFrequency: 10, sineAmplitude: 100 });
    const { result: alphaResult } = renderHook(() =>
      useFocus(eegAlpha, { updateHz: 10, smoothing: 0 }),
    );

    // Beta-dominant signal (25 Hz) — high focus
    const eegBeta = createMockEEGData({ sineFrequency: 25, sineAmplitude: 100 });
    const { result: betaResult } = renderHook(() =>
      useFocus(eegBeta, { updateHz: 10, smoothing: 0 }),
    );

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(betaResult.current.state.current.raw).toBeGreaterThan(
      alphaResult.current.state.current.raw,
    );
  });

  it("resetCalibration resets state", () => {
    const eeg = createMockEEGData();
    const { result } = renderHook(() => useFocus(eeg));

    act(() => {
      result.current.resetCalibration();
    });

    expect(result.current.state.current.focus).toBe(0);
    expect(result.current.state.current.calibrated).toBe(false);
  });

  it("cleans up on unmount", () => {
    vi.useFakeTimers();
    const clearIntervalSpy = vi.spyOn(globalThis, "clearInterval");
    const eeg = createMockEEGData();
    const { unmount } = renderHook(() => useFocus(eeg));
    unmount();
    expect(clearIntervalSpy).toHaveBeenCalled();
    clearIntervalSpy.mockRestore();
  });
});
