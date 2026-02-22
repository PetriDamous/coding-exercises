import { it, expect, vi } from "vitest";
import writeData from "./io";
import { promises as fs } from "fs";

it("should execute the writeFile method", async () => {
  // Arrange
  const testData = "Test Data";
  const testFileName = "test.txt";

  vi.mock("fs");

  // Act
  writeData(testData, testFileName);

  // Assert
  expect(fs.writeFile).toBeCalled();

  // expect(writeData(testData, testFileName)).resolves.toBeUndefined();
});
