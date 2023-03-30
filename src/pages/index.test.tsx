import React from "react";
import { render, screen } from "@testing-library/react";
// import Home from "../pages/index";

describe("Index some basic tests.", () => {
  //   it("adds two and two", () => {
  //     render(<Home />);

  //     const heading = screen.findByText("information");

  //     expect(heading).toBeInTheDocument();
  //   });

  it("adds two and two", () => {
    expect(2 + 2).toBe(4);
  });
});
