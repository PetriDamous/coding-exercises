import { it, expect, describe } from "vitest";
import { transformToNumber, cleanNumbers } from "./numbers";

describe("transformToNumber()", () => {
  it("should transform a string number to a number of type number", () => {
    const input = "1";

    const result = transformToNumber(input);

    expect(result).toBeTypeOf("number");
  });

  it("should transform a string number to a number of type number", () => {
    const input = "1";

    const result = transformToNumber(input);

    expect(result).toBe(+input);
  });

  it("should yield NaN for non-transformable values", () => {
    const input = "invalid";
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe("cleanNumbers()", () => {
  it("return an array of typeof number when an array of typeof 'string' numeric values are passed in.", () => {
    // Arrange
    const numberStrings = ["1", "2"];

    // Act
    const result = cleanNumbers(numberStrings);

    // Assert
    expect(result[0]).toBeTypeOf("number");
    expect(result[1]).toBeTypeOf("number");
  });
});
