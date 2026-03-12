import { describe, it, expect, vi } from "vitest";
import { sendDataRequest } from "./http";
import { HttpError } from "./errors";

const testResponseData = { dataKey: "Sucess Test" };

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") {
      return reject("Not a string!!!");
    }

    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };

    resolve(testResponse);
  });
});

vi.stubGlobal("fetch", testFetch);

describe("sendDataRequest()", () => {
  it("should return any availiable response data", () => {
    const testData = { key: "test" };

    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
  });

  it("should convert the passed in data to a string before sending response.", async () => {
    const testData = { key: "test" };
    let errorMessage;

    try {
      await sendDataRequest(testData);
    } catch (e) {
      errorMessage = e;
    }

    expect(errorMessage).not.toBe("Not a string!!!");
  });

  it("should throw an Http error if repsonse.ok is false", () => {
    testFetch.mockImplementationOnce((url, options) => {
      return new Promise((resolve, reject) => {
        const testResponse = {
          ok: false,
          json() {
            return new Promise((resolve, reject) => {
              resolve(testResponseData);
            });
          },
        };

        resolve(testResponse);
      });
    });

    const testData = { key: "test" };

    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
  });
});
