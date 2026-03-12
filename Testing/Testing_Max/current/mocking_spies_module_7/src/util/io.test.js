import { it, expect, vi, describe } from "vitest";
import writeData from "./io";
import { promises as fs } from "fs";
import path from "path";

vi.mock("fs");
vi.mock("path");

describe("writeData()", () => {
  it("should execute the writeFile method", async () => {
    // Arrange
    const testData = "Test Data";
    const testFileName = "test.txt";

    // vi.mock("path", () => {
    //   return {
    //     default: {
    //       join(...args) {
    //         return args[args.length - 1];
    //       },
    //     },
    //   };
    // });

    // Act
    writeData(testData, testFileName);

    // Assert
    expect(fs.writeFile).toBeCalled();
  });

  it("should call the writeFile method with a arguments of testData and testFileName", () => {
    // Arrange
    const testData = "Test Data";
    const testFileName = "test.txt";

    // Act
    writeData(testData, testFileName);

    // Assert
    expect(fs.writeFile).toBeCalledWith(testFileName, testData);
  });

  it("should return a promise of no value if called correctly", () => {
    // Arrange
    const testData = "Test Data";
    const testFileName = "test.txt";

    // Act
    writeData(testData, testFileName);

    // Assert
    expect(writeData(testData, testFileName)).resolves.toBeUndefined();
  });
});
