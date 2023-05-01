import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../tasks/counter";

describe("Counter test", () => {
  test("should counter with initial state", () => {
    // arrange
    render(<Counter />);
    // assert
    expect(screen.getByText(/0/i)).toBeDefined();
  });
  test("should counter after clicking the button some times", () => {
    // arrange
    render(<Counter />);
    const button = screen.getByText(/increment/i);
    // action
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    // assert
    expect(screen.getByText(/Counter: 3/i)).toBeDefined();
  });
});
