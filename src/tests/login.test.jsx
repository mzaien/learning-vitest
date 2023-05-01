import { describe, expect, test } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Login from "../tasks/login";

describe("Counter test", () => {
  test("show login component with normal error", () => {
    // arrange
    const { getByText, getByLabelText } = render(<Login />);
    const emailInput = getByLabelText("email");
    const passwordInput = getByLabelText("password");
    const button = getByText("Login");

    // action
    fireEvent.change(emailInput, { target: { value: "example@hotmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "123" } });
    fireEvent.click(button);

    // assert
    expect(emailInput.value).toBe("example@hotmail.com");
    expect(passwordInput.value).toBe("123");
    expect(getByText("Invalid email or password")).toBeDefined();
  });
  test("show login component with no errors after putting valid credentials", () => {
    // arrange
    const { getByText, getByLabelText, queryByText } = render(<Login />);
    const emailInput = getByLabelText("email");
    const passwordInput = getByLabelText("password");
    const button = getByText("Login");
    const errorText = queryByText("Invalid email or password",{ hidden: true })

    // action
    fireEvent.change(emailInput, { target: { value: "example@hotmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "123" } });
    fireEvent.click(button);
    // second time with correct data
    fireEvent.change(emailInput, { target: { value: "example@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(button);

    // assert
    expect(emailInput.value).toBe("example@gmail.com");
    expect(passwordInput.value).toBe("password123");
    expect(errorText).toBeNull();
  });
});
