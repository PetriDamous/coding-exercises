import { expect, it } from "vitest";
import { generateToken } from "./async-example";

it("should generate a token value", (done) => {
  const testUserEmail = "test@test.com";

  generateToken(testUserEmail, (err, token) => {
    // expect(token).toBeDefined(); // Currently will pass no matter what
    // expect(token).toBe(2); // Will also pass no matter what. What is going on here?

    try {
      expect(token).toBe(2); // Will now fail like we expect
      expect(token).toBeDefined(); // Will pass like we expect
      done(); // Lets vitest know we are done so you can run the test runner
    } catch (err) {
      done(err); // Lets vitest know we are done so you can run the test runner
    }
  });
});
