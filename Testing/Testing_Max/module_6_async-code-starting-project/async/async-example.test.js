import { describe, expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

describe("generateToken()", () => {
  it("should generate a token value", (done) => {
    const testUserEmail = "test@test.com";

    generateToken(testUserEmail, (err, token) => {
      // expect(token).toBeDefined(); // Currently will pass no matter what
      // expect(token).toBe(2); // Will also pass no matter what. What is going on here?

      try {
        // expect(token).toBe(2); // Will now fail like we expect
        expect(token).toBeDefined(); // Will pass like we expect
        done(); // Lets vitest know we are done so you can run the test runner
      } catch (err) {
        done(err); // Lets vitest know we are done so you can run the test runner
      }
    });
  });
});

describe("generateTokenPromise()", () => {
  it("should return a defined value. Using the '.resolver' method.", () => {
    // Arrange
    const testEmail = "dogwater@yahoo.com";

    // Assert
    expect(generateTokenPromise(testEmail)).resolves.toBeDefined();
  });

  it("should return a defined value. Using 'async await'", async () => {
    // Arrange
    const testEmail = "dogwater@yahoo.com";
    // Act
    const result = await generateTokenPromise(testEmail);
    // Assert
    expect(result).toBeDefined();
  });
});
