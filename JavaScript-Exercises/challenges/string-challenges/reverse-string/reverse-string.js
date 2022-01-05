// Solution 1
const reverseString = (str) => {
  const strArray = str.split("");

  for (let i = 0; i < strArray.length / 2; i++) {
    const reverseIterator = strArray.length - (i + 1);

    const START = strArray[i];
    const END = strArray[reverseIterator];

    strArray[i] = END;

    strArray[reverseIterator] = START;
  }

  return strArray.join("");
};

console.log(reverseString("dog"));

console.log(reverseString("I love puppies!!!!"));

// Solution 2
const reverseString = (str) => {
  const strArray = str.split("");

  const newStrArray = [];

  for (let i = 0; i < strArray.length; i++) {
    const reverseIterator = strArray.length - (i + 1);

    newStrArray.push(strArray[reverseIterator]);
  }

  return newStrArray.join("");
};

console.log(reverseString("dog"));

console.log(reverseString("I love puppies!!!!"));

// Solution 3
const reverseString = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseString("dog"));

console.log(reverseString("I love puppies!!!!"));
