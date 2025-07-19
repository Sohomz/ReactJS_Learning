import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Grouping test cases based on if rendered or not", () => {
  test("should load heading contact us component", () => {
    render(<Contact />); //render it first to JSDOM

    const head = screen.getByRole("heading");
    expect(head).toBeInTheDocument();
  });

  test("should load btn contact us component", () => {
    render(<Contact />); //render it first to JSDOM
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });

  test("should load 2 text boxes in contact us component", () => {
    render(<Contact />); //render it first to JSDOM
    const textBox = screen.getAllByRole("textbox");
    expect(textBox.length).toBe(2);
  });
});
