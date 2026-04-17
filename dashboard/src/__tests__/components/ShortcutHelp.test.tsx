import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ShortcutHelp from "../../components/ShortcutHelp";

describe("ShortcutHelp", () => {
  it("renders nothing by default (closed)", () => {
    const { container } = render(<ShortcutHelp />);
    expect(container.querySelector(".modal-overlay")).toBeNull();
  });

  it("opens when '?' key is pressed", () => {
    render(<ShortcutHelp />);

    fireEvent.keyDown(window, { key: "?", shiftKey: true, code: "Slash" });

    expect(screen.getByText("Keyboard Shortcuts")).toBeInTheDocument();
  });

  it("shows all expected shortcuts", () => {
    render(<ShortcutHelp />);
    fireEvent.keyDown(window, { key: "?" });

    expect(screen.getByText("Pause / Resume")).toBeInTheDocument();
    expect(screen.getByText("Start / Stop recording")).toBeInTheDocument();
    expect(screen.getByText("Toggle FFT panel")).toBeInTheDocument();
    expect(screen.getByText("Toggle Statistics panel")).toBeInTheDocument();
  });

  it("closes when Close button is clicked", () => {
    render(<ShortcutHelp />);
    fireEvent.keyDown(window, { key: "?" });

    expect(screen.getByText("Keyboard Shortcuts")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Close"));

    expect(screen.queryByText("Keyboard Shortcuts")).not.toBeInTheDocument();
  });

  it("closes when Escape is pressed", () => {
    render(<ShortcutHelp />);
    fireEvent.keyDown(window, { key: "?" });
    expect(screen.getByText("Keyboard Shortcuts")).toBeInTheDocument();

    fireEvent.keyDown(window, { code: "Escape", key: "Escape" });
    expect(screen.queryByText("Keyboard Shortcuts")).not.toBeInTheDocument();
  });

  it("closes when overlay background is clicked", () => {
    render(<ShortcutHelp />);
    fireEvent.keyDown(window, { key: "?" });

    const overlay = screen.getByText("Keyboard Shortcuts").closest(".modal-overlay");
    expect(overlay).not.toBeNull();

    fireEvent.click(overlay!);
    expect(screen.queryByText("Keyboard Shortcuts")).not.toBeInTheDocument();
  });

  it("does not toggle when typing in an input", () => {
    const { container } = render(
      <div>
        <input data-testid="input" />
        <ShortcutHelp />
      </div>,
    );

    const input = screen.getByTestId("input");
    fireEvent.keyDown(input, { key: "?", target: input });

    // Should still be closed — keydown from INPUT should be ignored
    expect(container.querySelector(".modal-overlay")).toBeNull();
  });
});
