import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "store";
test("renders App component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // You can add more specific tests based on your application's behavior
  // For example, you can check if certain elements are present on the page.
  expect(screen.getByText("Eqaim Blog"));
  // Add more assertions as needed.
});
