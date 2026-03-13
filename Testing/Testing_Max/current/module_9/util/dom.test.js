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
  it("Dummy test", () => {
    showError("test");
  });
});
