import React from "react";
import { render, screen } from "@testing-library/react";
import TitleComponent from "../TitleComponent";
import { NextIntlProvider } from "next-intl";

describe("Components: some basic tests.", () => {
  it("adds two and two", () => {
    expect(2 + 2).toBe(4);
  });

  it("first renderer test ", () => {
    const { container } = render(
      <NextIntlProvider locale="en">
        <TitleComponent />
      </NextIntlProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
