import { stories } from "./resolvers/Query";
import { editStoryName } from "./resolvers/Mutation";

const fs = require("fs");

jest.mock("fs");

describe("Resolvers", () => {
  test("Stories query should return 4 stories", () => {
    const mockStories = JSON.stringify([
      {
        id: "1",
        name: "story 1",
        image: "image1.png",
        description: "description 1",
      },
      {
        id: "2",
        name: "story 2",
        image: "image2.png",
        description: "description 2",
      },
    ]);
    fs.readFileSync.mockReturnValue(mockStories);
    const values = stories();
    expect(values.length).toBe(2);
  });

  test("EditStoryName should update the name of a story", () => {
    const mockStories = JSON.stringify([
      {
        id: "1",
        name: "story 1",
        image: "image1.png",
        description: "description 1",
      },
      {
        id: "2",
        name: "story 2",
        image: "image2.png",
        description: "description 2",
      },
    ]);
    fs.readFileSync.mockReturnValue(mockStories);
    editStoryName(undefined, { id: "1", name: "updated story name" });
    expect(fs.writeFileSync).toHaveBeenCalled();
  });
});
