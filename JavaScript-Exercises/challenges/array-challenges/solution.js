/**
 *
 * Challenge 2
 *
 */

const names = [
  "John Smith",
  "Dan Boone",
  "Jennifer Jane",
  "Charles Lindy",
  "Jennifer Eight",
  "Rob Roy",
];

// Solution 1
const findLastName = (name) => {
  let lastEmptyStr = 0;

  for (let i = name.length; i >= 0; i--) {
    if (name[i] === " ") {
      lastEmptyStr = i;
      break;
    }
  }

  return name.slice(lastEmptyStr, name.length);
};

const sortByLastName = (names) => {
  return names.sort((a, b) => {
    const firstCompare = findLastName(a).toLowerCase();
    const lastCompare = findLastName(b).toLowerCase();

    if (firstCompare > lastCompare) return 1;
    if (firstCompare < lastCompare) return -1;
  });
};

console.log(sortByLastName(names));

/**
 *
 * Challenge 3
 *
 */

// Creates Range
const createRange = (a, b) => {
  if (!b) return [...new Array(a + 1).keys()];

  return [...new Array(b - a + 1).keys()].map((x) => x + a);
};

// Solution 1
const findProduct = (range) => {
  const productsArray = [];

  range.forEach((numOuter, i) => {
    const tempArray = [];

    productsArray[i] = [];

    range.forEach((numInner, j) => {
      productsArray[i][j] = numInner * i;
    });
  });

  return productsArray;
};

console.log(findProduct(createRange(9)));

// Solution 2
const findProduct = (range) => {
  const productsArray = [];

  for (let i = 0; i < range.length; i++) {
    const tempArray = [];
    productsArray[i] = tempArray;

    for (let j = 0; j < range.length; j++) {
      productsArray[i][j] = range[j] * i;
    }
  }

  return productsArray;
};

console.log(findProduct(createRange(9)));
