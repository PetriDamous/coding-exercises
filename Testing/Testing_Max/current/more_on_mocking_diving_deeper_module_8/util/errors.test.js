import { expect, describe, it } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("class HttpError", () => {
  it("should contain the provided status code, message , and data", () => {
    // Arange
    const statusCode = 1;
    const message = "Test Message";
    const data = { id: 1, payload: "Test data" };

    // Act
    const newHttpError = new HttpError(statusCode, message, data);

    // Assert
    expect(newHttpError.statusCode).toBe(statusCode);
    expect(newHttpError.message).toBe(message);
    expect(newHttpError.data).toBe(data);
  });

  it("should return undefined if data is not passed in", () => {
    // Arange
    const statusCode = 1;
    const message = "Test Message";

    // Act
    const newHttpError = new HttpError(statusCode, message);

    // Assert
    expect(newHttpError.data).toBeUndefined();
  });
});

describe("class ValidationError", () => {
  it("should return a message on its message property", () => {
    // Arange
    const testMessage = "This is a test";

    // Act
    const newValidationError = new ValidationError(testMessage);

    // Assert
    expect(newValidationError.message).toBe(testMessage);
  });

  it("should return undefined if message is not passed in", () => {
    // Act
    const newValidationError = new ValidationError();

    // Assert

    expect(newValidationError.message).toBeUndefined();
  });
});
