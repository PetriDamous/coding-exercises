import { validateNumber, validateStringNotEmpty } from "./validation";

export function transformToNumber(value) {
  // return NaN;
  return +value;
}

export const createResultFromNumbers = (numberInputs) => {
  const numbers = [];
  for (const numberInput of numberInputs) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return add(numbers).toString();
};
