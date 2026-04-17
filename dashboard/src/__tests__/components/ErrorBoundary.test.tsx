import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ErrorBoundary from "../../components/ErrorBoundary";

function ThrowingChild({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) throw new Error("Test error message");
  return <div>All good</div>;
}

describe("ErrorBoundary", () => {
  // Suppress React error boundary console noise during tests
  const originalError = console.error;
  beforeEach(() => {
    console.error = (...args: unknown[]) => {
      if (typeof args[0] === "string" && args[0].includes("ErrorBoundary")) return;
      if (typeof args[0] === "string" && args[0].includes("The above error")) return;
      originalError.call(console, ...args);
    };
  });
  afterEach(() => {
    console.error = originalError;
  });

  it("renders children when no error", () => {
    render(
      <ErrorBoundary>
        <ThrowingChild shouldThrow={false} />
      </ErrorBoundary>,
    );

    expect(screen.getByText("All good")).toBeInTheDocument();
  });

  it("renders error UI when child throws", () => {
    render(
      <ErrorBoundary>
        <ThrowingChild shouldThrow={true} />
      </ErrorBoundary>,
    );

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(screen.getByText("Test error message")).toBeInTheDocument();
  });

  it("renders Retry button on error", () => {
    render(
      <ErrorBoundary>
        <ThrowingChild shouldThrow={true} />
      </ErrorBoundary>,
    );

    expect(screen.getByText("Retry")).toBeInTheDocument();
  });

  it("recovers when Retry is clicked and child no longer throws", () => {
    // Use a mutable flag so the same component instance can stop throwing
    const flag = { shouldThrow: true };
    function Conditional() {
      if (flag.shouldThrow) throw new Error("boom");
      return <div>All good</div>;
    }

    render(
      <ErrorBoundary>
        <Conditional />
      </ErrorBoundary>,
    );

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();

    // Stop throwing, then click Retry
    flag.shouldThrow = false;
    fireEvent.click(screen.getByText("Retry"));

    expect(screen.getByText("All good")).toBeInTheDocument();
  });
});
