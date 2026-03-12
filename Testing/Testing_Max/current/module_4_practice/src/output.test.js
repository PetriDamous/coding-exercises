import { describe, it, expect, assert } from "vitest";
import { createResultOutput } from "./output";

describe("createResultOutput()", () => {
  it("should return a typeof string no matter what value is passed in", () => {
    // Arrange
    const VALUES_1 = 1;
    const VALUES_2 = false;
    const VALUES_3 = "DOG";

    // Act
    const RESULT_1 = createResultOutput(VALUES_1);
    const RESULT_2 = createResultOutput(VALUES_2);
    const RESULT_3 = createResultOutput(VALUES_3);

    // Assert
    expect(RESULT_1).toBeTypeOf("string");
    expect(RESULT_2).toBeTypeOf("string");
    expect(RESULT_3).toBeTypeOf("string");
  });

  it("should return resultText with value of 'Invalid input. You must enter valid numbers.' when result is 'invalid'", () => {
    // Arrange
    const invalidResult = "invalid";

    //  Act
    const result = createResultOutput(invalidResult);

    // Assert
    expect(result).toBe("Invalid input. You must enter valid numbers.");
  });

  it("should return empty string if if 'no-calc' is passed in", () => {
    // Arrange
    const noCalcValue = "no-calc";

    // Act
    const result = createResultOutput(noCalcValue);

    // Assert
    assert.isEmpty(result);
  });
});
