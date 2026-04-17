import { describe, it, expect, vi, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useWebhookEvaluator } from "../../hooks/useWebhookEvaluator";
import { createMockEEGData } from "../helpers/mockEEGData";
import type { WebhookRule } from "../../types";

function makeRule(overrides: Partial<WebhookRule> = {}): WebhookRule {
  return {
    id: "test-rule-1",
    name: "Test Rule",
    enabled: true,
    trigger_type: "band_power_above",
    params: { band: "alpha", channel: "avg", threshold: 0.1 },
    url: "https://example.com/webhook",
    method: "POST",
    headers: {},
    body_template: "",
    cooldown: 0,
    last_fired: 0,
    fire_count: 0,
    service: "generic",
    ...overrides,
  };
}

describe("useWebhookEvaluator", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("fires sendCommand when rule triggers", () => {
    vi.useFakeTimers();
    const sendCommand = vi.fn();
    const eeg = createMockEEGData({ sineFrequency: 10, sineAmplitude: 100 });

    // Very low threshold — should always trigger on a 100µV sine
    const rules = [makeRule({ params: { band: "alpha", channel: "avg", threshold: 0.001 } })];

    renderHook(() => useWebhookEvaluator(rules, eeg, sendCommand));

    // Advance past evaluation interval (1000ms)
    act(() => {
      vi.advanceTimersByTime(1100);
    });

    expect(sendCommand).toHaveBeenCalledWith(
      expect.objectContaining({
        cmd: "webhook_fire",
        rule_id: "test-rule-1",
      }),
    );
  });

  it("does not fire for disabled rules", () => {
    vi.useFakeTimers();
    const sendCommand = vi.fn();
    const eeg = createMockEEGData({ sineFrequency: 10, sineAmplitude: 100 });

    const rules = [makeRule({ enabled: false, params: { band: "alpha", channel: "avg", threshold: 0.001 } })];
    renderHook(() => useWebhookEvaluator(rules, eeg, sendCommand));

    act(() => {
      vi.advanceTimersByTime(1100);
    });

    expect(sendCommand).not.toHaveBeenCalled();
  });

  it("does not fire when threshold is not exceeded", () => {
    vi.useFakeTimers();
    const sendCommand = vi.fn();
    const eeg = createMockEEGData({ sineFrequency: 10, sineAmplitude: 1 });

    // Very high threshold — tiny signal won't exceed it
    const rules = [makeRule({ params: { band: "alpha", channel: "avg", threshold: 99999 } })];
    renderHook(() => useWebhookEvaluator(rules, eeg, sendCommand));

    act(() => {
      vi.advanceTimersByTime(1100);
    });

    expect(sendCommand).not.toHaveBeenCalled();
  });

  it("respects cooldown between fires", () => {
    vi.useFakeTimers();
    const sendCommand = vi.fn();
    const eeg = createMockEEGData({ sineFrequency: 10, sineAmplitude: 100 });

    const rules = [
      makeRule({
        cooldown: 5, // 5 seconds
        params: { band: "alpha", channel: "avg", threshold: 0.001 },
      }),
    ];

    renderHook(() => useWebhookEvaluator(rules, eeg, sendCommand));

    // First fire
    act(() => {
      vi.advanceTimersByTime(1100);
    });
    expect(sendCommand).toHaveBeenCalledTimes(1);

    // Should NOT fire again within cooldown
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(sendCommand).toHaveBeenCalledTimes(1);

    // After cooldown expires (5s total)
    act(() => {
      vi.advanceTimersByTime(4000);
    });
    expect(sendCommand).toHaveBeenCalledTimes(2);
  });

  it("does not fire when URL is empty", () => {
    vi.useFakeTimers();
    const sendCommand = vi.fn();
    const eeg = createMockEEGData({ sineFrequency: 10, sineAmplitude: 100 });

    const rules = [makeRule({ url: "", params: { band: "alpha", channel: "avg", threshold: 0.001 } })];
    renderHook(() => useWebhookEvaluator(rules, eeg, sendCommand));

    act(() => {
      vi.advanceTimersByTime(1100);
    });

    expect(sendCommand).not.toHaveBeenCalled();
  });

  it("handles amplitude_above trigger type", () => {
    vi.useFakeTimers();
    const sendCommand = vi.fn();
    const eeg = createMockEEGData({ sineFrequency: 10, sineAmplitude: 200 });

    const rules = [
      makeRule({
        trigger_type: "amplitude_above",
        params: { channel: 0, threshold: 50 },
      }),
    ];

    renderHook(() => useWebhookEvaluator(rules, eeg, sendCommand));

    act(() => {
      vi.advanceTimersByTime(1100);
    });

    expect(sendCommand).toHaveBeenCalledWith(
      expect.objectContaining({ cmd: "webhook_fire" }),
    );
  });

  it("handles band_ratio_above trigger type", () => {
    vi.useFakeTimers();
    const sendCommand = vi.fn();
    // 10 Hz = alpha dominant, so alpha/beta ratio should be high
    const eeg = createMockEEGData({ sineFrequency: 10, sineAmplitude: 100 });

    const rules = [
      makeRule({
        trigger_type: "band_ratio_above",
        params: {
          numerator: "alpha",
          denominator: "beta",
          channel: "avg",
          threshold: 0.5,
        },
      }),
    ];

    renderHook(() => useWebhookEvaluator(rules, eeg, sendCommand));

    act(() => {
      vi.advanceTimersByTime(1100);
    });

    expect(sendCommand).toHaveBeenCalledWith(
      expect.objectContaining({ cmd: "webhook_fire" }),
    );
  });

  it("does not fire with insufficient samples", () => {
    vi.useFakeTimers();
    const sendCommand = vi.fn();
    const eeg = createMockEEGData({ sineFrequency: 10, samplesWritten: 10 });

    const rules = [makeRule({ params: { band: "alpha", channel: "avg", threshold: 0.001 } })];
    renderHook(() => useWebhookEvaluator(rules, eeg, sendCommand));

    act(() => {
      vi.advanceTimersByTime(1100);
    });

    expect(sendCommand).not.toHaveBeenCalled();
  });

  it("cleans up interval on unmount", () => {
    vi.useFakeTimers();
    const clearIntervalSpy = vi.spyOn(globalThis, "clearInterval");
    const eeg = createMockEEGData();
    const sendCommand = vi.fn();
    const { unmount } = renderHook(() =>
      useWebhookEvaluator([], eeg, sendCommand),
    );
    unmount();
    expect(clearIntervalSpy).toHaveBeenCalled();
    clearIntervalSpy.mockRestore();
  });
});
