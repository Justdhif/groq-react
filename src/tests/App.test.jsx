import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App Unit Testing", () => {
  test("make sure heading is displayed", () => {
    render(<App />);
    const webTitle = screen.getByTestId("web__title");
    expect(webTitle).toHaveTextContent(/^Groq AI Assistant$/);
  });
});
