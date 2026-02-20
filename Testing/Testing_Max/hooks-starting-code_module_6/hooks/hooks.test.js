import { it, expect, beforeAll, beforeEach, afterEach, afterAll } from "vitest";
import { User } from "./hooks";

// beforeAll - Good for inintializing setup that will happen before all test are ran
// beforeEach - Good for resting state or values before each test
// afterEach - Similar to beforeEach but runs after each test
// afterAll - Good at running clean up code after all test have ran

let testEmail = "test@test.com";
let user = new User(testEmail);

beforeEach(() => {
  testEmail = "test@test.com";
  user = new User(testEmail);
});

it.concurrent("should update the email", () => {
  const newTestEmail = "test2@test.com";

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it.concurrent("should have an email property", () => {
  expect(user).toHaveProperty("email");
});

it.concurrent("should store the provided email value", () => {
  expect(user.email).toBe(testEmail);
});

it.concurrent("should clear the email", () => {
  user.clearEmail();

  expect(user.email).toBe("");
});

it.concurrent(
  "should still have an email property after clearing the email",
  () => {
    user.clearEmail();

    expect(user).toHaveProperty("email");
  },
);
