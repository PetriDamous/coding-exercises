import { it, describe, expect } from "vitest";
import { validateNotEmpty } from "./validation";

describe("validateNotEmpty()", () => {
  it("should throw error if empty string is passed in for the first argument", () => {
    // Arange
    const testInput = "";

    // Act
    const validateFn = () => validateNotEmpty(testInput);

    // Assert
    expect(validateFn).toThrow();
  });

  it("should throw an error with an error message when error messagae is provided", () => {
    // Arrange
    const testInput = "";
    const testErrorMsg = "Testing error";

    // Act
    const validateFn = () => validateNotEmpty(testInput, testErrorMsg);

    // Assert
    expect(validateFn).toThrow(testErrorMsg);
  });
});
