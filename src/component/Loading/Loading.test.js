// import "./loader.css";
// export const Loading = () => {
//   return <div id="cover-spin"></div>;
// };

// Path: src/component/Loading/loader.css

// write test cases for the following components:

// 1. src/component/Loading/Loading.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./loader.css";

test("renders Loading component", () => {
  render(<div id="cover-spin" data-testid="cover-spin"></div>);

  // You can add more specific tests based on your application's behavior
  // For example, you can check if certain elements are present on the page.
  expect(screen.getByTestId("cover-spin"));
  // Add more assertions as needed.
});
