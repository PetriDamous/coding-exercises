import { it, expect, describe } from "vitest";
import { validateStringNotEmpty, validateNumber } from "./validation";

describe("validateStringNotEmpty()", () => {
  it("should not throw error when string is passed in", () => {
    // Arrange
    const string = "test";
    const resultFn = () => validateStringNotEmpty(string);

    // Assert
    expect(resultFn).not.toThrow();
  });

  it("should throw error when empty string is passed in", () => {
    const string = "";
    const resultFn = () => validateStringNotEmpty(string);

    expect(resultFn).toThrow();
  });

  //   it("should throw error when object data type is passed in", () => {
  //     const array = [];
  //     const resultFn = validateStringNotEmpty(array);

  //     expect(resultFn).toThrow();
  //   });

  it("should throw error when no value is passed in", () => {
    const resultFn = () => validateStringNotEmpty();

    expect(resultFn).toThrow();
  });
});

describe("validateNumber()", () => {
  it("should not throw an error when a number of type number is passed in", () => {
    const number = 1;
    const resultFn = () => validateNumber(number);

    expect(resultFn).not.toThrow();
  });

  it("should not throw an error when a number of type string is passed in", () => {
    const stringNumber = "1";
    const resultFn = () => validateNumber(stringNumber);

    expect(resultFn).not.toThrow();
  });

  it("should throw an error when none numeric string is passed in", () => {
    const string = "test";
    const resultFn = () => validateNumber(string);

    expect(resultFn).toThrow();
  });

  it("should throw an error when object data type is passed in", () => {
    const object = {};
    const resultFn = () => validateNumber(object);

    expect(resultFn).toThrow();
  });

  it("should throw error when no value is passed in", () => {
    const resultFn = () => validateNumber();

    expect(resultFn).toThrow();
  });
});
