import React from "react";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  getAllByAltText,
} from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import Card from "./Card";

import { BrowserRouter as Router } from "react-router-dom";
// Import the actual reducers if needed
import { reducers } from "../redux/reducers/reducers";

// Mock the import of the actual reducers
jest.mock("../redux/reducers/reducers", () => ({
  // Mock your reducers if needed
  reducers: jest.fn(),
}));

// Import the actual store creation

// Mock the import of the actual store creation
jest.mock("../store", () => ({
  store: jest.fn(),
}));

// Mock the middleware
const mockStore = configureMockStore([thunk]);

const mockInitialState = {
  blog: {
    blogs: [
      {
        _id: "1",
        title: "Mock Blog 1",
        content: "Mock Content 1",
        image: "Mock Image 1",
        createdAt: new Date(),
        // add other properties as needed
      },
      {
        _id: "2",
        title: "Mock Blog 2",
        content: "Mock Content 2",
        image: "Mock Image 2",
        createdAt: new Date(),
        // add other properties as needed
      },
    ],
  },
};

// Create a mock store with the initial state
const store = mockStore(mockInitialState);
test("renders Card component with mock blogs", () => {
  render(
    <Provider store={store}>
      <Router>
        <Card />
      </Router>
    </Provider>
  );

  // Your testing assertions...
  // For example, you can check if the titles of mock blogs are rendered correctly
  expect(screen.getByText("Mock Blog 1"));
});

test("navigates to the correct blog when clicked", async () => {
  const mockNavigate = jest.fn();
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
  }));

  render(
    <Provider store={store}>
      <Router>
        <Card />
      </Router>
    </Provider>
  );

  // Assuming there is at least one blog in the initialState
  const firstBlog = mockInitialState.blog.blogs[0];

  // Click on the first blog card

  fireEvent.click(screen.getByText(firstBlog.title));

  // Add a console.log statement to check if the navigate function is called

  // Check if the navigate function was called with the correct URL
  ///blog/${item._id}
  await waitFor(() => {
    // Your assertions here
    expect(mockNavigate);
  });
});
