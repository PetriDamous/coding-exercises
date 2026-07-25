import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Stories, { STORIES_QUERY, EDIT_STORY_NAME } from "./Stories";
import { MockedProvider } from "@apollo/client/testing";

describe("<Stories />", () => {
  test("should display a loading message when a component is fetching data", () => {
    const mocks = [
      {
        request: {
          query: STORIES_QUERY,
        },
        result: {
          data: {
            stories: [
              {
                id: 1,
                name: "story 1",
                image: "story1.jpg",
                description: "test description",
              },
            ],
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Stories />
      </MockedProvider>,
    );

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
  test("should display a story after a successful query", async () => {
    const mocks = [
      {
        request: {
          query: STORIES_QUERY,
        },
        result: {
          data: {
            stories: [
              {
                id: 1,
                name: "story 1",
                image: "story1.jpg",
                description: "test description",
                extra: "",
              },
            ],
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Stories />
      </MockedProvider>,
    );

    const story = await screen.findByText(/story 1/i);
    expect(story).toBeInTheDocument();
    const description = await screen.findByText(/test description/i);
    expect(description).toBeInTheDocument();
  });
  test("should display an error message on error", async () => {
    const mocks = [
      {
        request: {
          query: STORIES_QUERY,
        },
        error: new Error("O shit we fucked up now!!!!"),
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Stories />
      </MockedProvider>,
    );

    const error = await screen.findByText(/error/i);
    expect(error).toBeInTheDocument();
  });

  test("should display an error message AND the success stories", async () => {
    const mocks = [
      {
        request: {
          result: {
            query: STORIES_QUERY,
          },
          result: {
            errors: [new GraphQLError("error with the apollo server")],
            data: {
              stories: [
                {
                  id: 1,
                  name: "story 1",
                  image: "story1.jpg",
                  description: "test description",
                  extra: "",
                },
              ],
            },
          },
        },
      },
    ];

    render(
      <MockProvider
        mocks={mocks}
        addTypename={false}
        defaultOptions={{ watchQuery: { errorPolicy: "all" } }}
      >
        <Stories />
      </MockProvider>,
    );

    const error = await screen.findByText(/error loading all of the data/i);

    const stories = await screen.findByText(/story 1/i);

    expect(error).toBeInTheDocument();
    expect(stories).toBeInTheDocument();
  });
  test("should be able to edit the name of a story", async () => {
    const mocks = [
      {
        request: {
          query: EDIT_STORY_NAME,
          variables: {
            id: "1", // ID of story we want to update
            name: "A new name", // Updated name that we want to edit to for current story
          },
        },
        result: () => {
          return {
            editStoryName: {
              // Story object that gets returned from apollo server once mutation resolves and updates
              id: "1",
              name: "A new name",
            },
          };
        },
      },
      {
        request: {
          query: STORIES_QUERY,
        },
        result: {
          data: {
            stories: [
              {
                id: 1,
                name: "story 1",
                image: "story1.jpg",
                description: "test description",
                extra: "",
              },
            ],
          },
        },
      },
    ];

    render(
      <MockProvider mocks={mocks} addTypename={false}>
        <Stories />
      </MockProvider>,
    );

    const stories = await screen.findByText(/story 1/i);

    expect(stories).toBeInTheDocument();

    await userEvent.click(screen.getByTestId("edit-1"));
    await userEvent.click(screen.getByTestId("input-1"), "A new name");
    await userEvent.click(screen.getByRole("button", { name: /save/i }));

    expect(await screen.findByText(/A new name/i)).toBeInTheDocument();
  });

  test("should display an error message when a mutation fails", async () => {
    const mocks = [
      {
        request: {
          query: STORIES_QUERY,
        },
        result: {
          data: {
            stories: [
              {
                id: 1,
                name: "story 1",
                image: "story1.jpg",
                description: "test description",
                extra: "",
              },
            ],
          },
        },
      },
      {
        request: {
          query: EDIT_STORY_NAME,
          variables: {
            id: "1", // ID of story we want to update
            name: "A new name", // Updated name that we want to edit to for current story
          },
        },
        error: new Error("mutation error"),
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Stories />
      </MockedProvider>,
    );

    const stories = await screen.findByText(/story 1/i);

    expect(stories).toBeInTheDocument();

    await userEvent.click(screen.getByTestId("edit-1"));
    await userEvent.type(screen.getByTestId("input-1"), "A new name");
    await userEvent.click(screen.getByRole("button", { name: /save/i }));

    expect(
      await screen.findByText(/error editing story name/i),
    ).toBeInTheDocument();
  });
});
