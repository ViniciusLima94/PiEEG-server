import "@testing-library/jest-dom/vitest";

// Stub performance.now if not available in jsdom
if (typeof performance === "undefined") {
  (globalThis as unknown as Record<string, unknown>).performance = {
    now: () => Date.now(),
  };
}

// Stub requestAnimationFrame / cancelAnimationFrame
if (typeof globalThis.requestAnimationFrame === "undefined") {
  globalThis.requestAnimationFrame = (cb: FrameRequestCallback) =>
    setTimeout(cb, 16) as unknown as number;
  globalThis.cancelAnimationFrame = (id: number) => clearTimeout(id);
}
