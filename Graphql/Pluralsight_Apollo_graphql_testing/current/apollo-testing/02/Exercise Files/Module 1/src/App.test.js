import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MockedProvider } from "@apollo/client/testing";
import { STORIES_QUERY } from "./Stories";

const appMocks = [
  {
    request: {
      query: STORIES_QUERY,
    },
    result: {
      data: {
        stories: [
          {
            id: "1",
            name: "Story 1",
            image: "story1.jpg",
            description: "Test story description",
          },
        ],
      },
    },
  },
];

test("renders app heading and loads stories with Apollo provider", async () => {
  render(
    <MockedProvider mocks={appMocks} addTypename={false}>
      <App />
    </MockedProvider>,
  );

  expect(screen.getByText(/GET A GRIP/i)).toBeInTheDocument();
});
