import { describe, it, expect, beforeEach } from "vitest";
import { extractPostData } from "./posts";

const formTitle = "Test title";
const formConetnt = "Test content";
let formData;

beforeEach(() => {
  formData = {
    title: formTitle,
    content: formConetnt,
    get(input) {
      return this[input];
    },
  };
});

describe("extractPostData()", () => {
  it("should extract title and content from provided form data", () => {
    // Act
    const data = extractPostData(formData);

    // Assert
    expect(data.title).toBe(formTitle);
    expect(data.content).toBe(formConetnt);
  });
});
