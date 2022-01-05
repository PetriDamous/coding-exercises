/**
 *
 * Challenge 1
 *
 */
const petsArray = [
  ["dog", "Fido"],
  ["cat", "Whiskers"],
  ["pig", "Wilbur"],
];

// Solution 1
const transToObj = (array) => {
  return array.map((subArray) => {
    const emptyObj = {};

    emptyObj[subArray[0]] = subArray[1];

    return emptyObj;
  });
};

console.log(transToObj(petsArray));
