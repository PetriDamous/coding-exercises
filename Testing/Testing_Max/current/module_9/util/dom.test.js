import { it, describe, expect, vi, beforeEach } from "vitest";
import { Window } from "happy-dom";
import fs from "fs";
import path from "path";
import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal("document", document);

beforeEach(() => {
  // Prevent appending multiple htmlDocumentContent
  document.body.innerHTML = "";

  document.write(htmlDocumentContent);
});

describe("showError()", () => {
  it("should contain error message in id='errors' element.", () => {
    // Arrange
    const errorMsg = "test";

    // Act
    showError(errorMsg);

    const errorContainer = document.getElementById("errors");
    const errorElm = errorContainer.firstElementChild;

    // Assert
    expect(errorElm).not.toBeNull();
  });

  it("should show error message of 'test' in id='errors' element", () => {
    // Arrange
    const errorMsg = "test";

    // Act
    showError(errorMsg);

    const errorInnerHTML =
      document.getElementById("errors").firstElementChild.innerHTML;

    // Assert
    expect(errorInnerHTML).toBe("test");
  });

  it("should not contain an error paragraph initially", () => {
    const errorContainer = document.getElementById("errors");
    const errorMsg = errorContainer.firstElementChild;

    expect(errorMsg).toBeNull();
  });

  it("should output the provided message in the error paragaph", () => {
    const testErrorMessage = "Test";

    showError(testErrorMessage);

    const errorsEl = document.getElementById("errors");
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph.textContent).toBe(testErrorMessage);
  });
});
