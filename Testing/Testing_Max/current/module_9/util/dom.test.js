import { it, describe, expect, vi } from "vitest";
import { Window } from "happy-dom";
import fs from "fs";
import path from "path";
import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);
vi.stubGlobal("document", document);

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
});
