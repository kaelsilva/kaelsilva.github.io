import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Toolbar from "./index";

describe("Test toolbar component", () => {
  it("should be navigation element", () => {
    render(<Toolbar />);

    expect(screen.getByRole("navigation"));
  });

  it("should contain navigation buttons", () => {
    render(<Toolbar />);

    const buttonText = [
      "Home",
      "About me",
      "Skills",
      "Portfolio",
      "Contact me",
    ];

    const buttons = screen.getAllByRole("link");

    buttons.map((button) => {
      return expect(button).toHaveTextContent(buttonText.splice(0, 1)[0]);
    });
  });
});
