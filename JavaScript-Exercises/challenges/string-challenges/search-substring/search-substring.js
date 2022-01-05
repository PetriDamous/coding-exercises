// 1. Solution
const containsSubString = (string, subString) => {
  if (!subString) return false;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === subString[0]) {
      for (let j = 1; j < subString.length; j++) {
        i++;
        if (string[i] !== subString[j]) {
          return false;
        }
      }
      return true;
    }
  }

  return false;
};

console.log(
  containsSubString("The quick brown fox jumps over the lazy dog.", "g")
);

console.log(containsSubString("The quick brown fox jumps.", "z"));
