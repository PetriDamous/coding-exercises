export const createResultOutput = (result) => {
  let resultText = "";

  if (result === "invalid") {
    resultText = "Invalid input. You must enter valid numbers.";
  } else if (result !== "no-calc") {
    resultText = "Result: " + result;
  }

  return resultText;
};

// console.log(createResultOutput("no-calc"));

console.log("Result: " + "no-calc");
