import { describe, expect, test } from "vitest";
import { waitFor, render } from "@testing-library/react";
import Clock from "../tasks/clock";
describe("Counter test", () => {
  test("should clock with initial state", () => {
    // arrange
    const { findByDisplayValue } = render(<Clock />);
    const currentDate = new Date().toLocaleTimeString();
    // assert
    expect(findByDisplayValue(`Time: ${currentDate}`)).toBeTruthy();
  });
  test("should clock after 1 seconds", async () => {
    // arrange
    const { findByDisplayValue } = render(<Clock />);
    const currentDate = new Date(Date.now() + 1000).toLocaleTimeString();
    // action + assert
    await waitFor(() =>
      expect(findByDisplayValue(`Time: ${currentDate}`)).toBeTruthy()
    );
  });
});
