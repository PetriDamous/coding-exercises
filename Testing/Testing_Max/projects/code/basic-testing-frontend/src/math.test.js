import { it, expect, describe } from "vitest";
import { add } from "./math";

describe("add()", () => {
  it("should add all number values in an array", () => {
    // Arrange
    const numbers = [1, 2];

    const expectedResult = numbers.reduce((acc, curr) => acc + curr, 0);

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should return NaN when when at least one invalide non-numerical string is used", () => {
    // Arrange
    const numbers = ["woof", 1];

    // Act
    const result = add(numbers);

    // Assert

    expect(result).toBeNaN();
  });

  it("should return correct sum if array of numeric strings are provided", () => {
    // Arrange
    const numbers = ["1", "2"];

    const expectedResult = numbers.reduce((acc, curr) => +acc + +curr, 0);

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should return 0 if an empty array is provided", () => {
    // Arrange
    const numbers = [];
    const expectedResult = 0;

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toBe(expectedResult);
  });

  it("should throw an error when a value is not provided", () => {
    const resultFn = () => add();

    expect(resultFn).toThrow();
  });
});
