import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import TitleComponent from "../TitleComponent";

describe("Components: some basic tests.", () => {
  it("adds two and two", () => {
    expect(2 + 2).toBe(4);
  });

  it("first renderer test ", () => {
    const component = renderer.create(<TitleComponent />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
