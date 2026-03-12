import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should convert numeric string of type string to numeric value type of number", () => {
  // Arrange
  const numericString = "1";

  //  Act
  const result = transformToNumber(numericString);

  // Assert
  expect(result).toBeTypeOf("number");
});

it("should return type of number when type of number is used", () => {
  // Arrange
  const number = 1;

  // Act
  const result = transformToNumber(number);

  // Assert
  expect(result).toBeTypeOf("number");
});

// Using more than one Assertion aka Expectation
it("should return NaN when type of other than number or string is used", () => {
  // Arrange
  const nonNumericString = "test";
  const object = {};

  // Acting twice
  const result1 = transformToNumber(nonNumericString);
  const result2 = transformToNumber(object);

  // Using double Assertions
  expect(result1).toBeNaN();
  expect(result2).toBeNaN();
});
