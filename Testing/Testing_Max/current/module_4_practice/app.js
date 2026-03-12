import { extractNumberInput } from "./src/parser.js";
import { resultFromNumberInput } from "./src/math.js";
import { createResultOutput } from "./src/output.js";

const form = document.querySelector("form");
const output = document.getElementById("result");

function formSubmitHandler(event) {
  event.preventDefault();

  const numberInputs = extractNumberInput();

  const result = resultFromNumberInput(numberInputs);

  output.textContent = createResultOutput(result);
}

form.addEventListener("submit", formSubmitHandler);
