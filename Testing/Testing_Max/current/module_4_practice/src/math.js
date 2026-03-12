import { validateNumber, validateStringNotEmpty } from "./util/validation";
import { createResultFromNumbers } from "./util/numbers";

export function add(numbers) {
  let sum = 0;

  // throw new Error('Something went wrong');

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

export const resultFromNumberInput = (numberInputs) => {
  let result = "";

  try {
    result = createResultFromNumbers(numberInputs);
  } catch (error) {
    result = error.message;
  }

  return result;
};
