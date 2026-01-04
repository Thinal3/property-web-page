import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

test("renders home page sections", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  // Check that the Search Properties button is rendered
  expect(
    screen.getByRole("button", { name: /search properties/i })
  ).toBeInTheDocument();
});
