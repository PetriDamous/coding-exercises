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

  range.forEach((_, i) => {
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
    productsArray[i] = [];

    for (let j = 0; j < range.length; j++) {
      productsArray[i][j] = range[j] * i;
    }
  }

  return productsArray;
};

console.log(findProduct(createRange(9)));

/**
 *
 * Challenge 4
 *
 */

const presidents = [
  {
    last_name: "Clinton",
    first_name: "Bill",
    party: "Democrat",
    year_elected: 1992,
    state_residence: "Arkansas",
  },
  {
    last_name: "Obama",
    first_name: "Barack",
    party: "Democrat",
    year_elected: 2008,
    state_residence: "Illinois",
  },
  {
    last_name: "Bush",
    first_name: "George",
    party: "Republican",
    year_elected: 2000,
    state_residence: "Texas",
  },
  {
    last_name: "Lincoln",
    first_name: "Abraham",
    party: "Republican",
    year_elected: 1860,
    state_residence: "Illinois",
  },
  {
    last_name: "Eisenhower",
    first_name: "Dwight",
    party: "Republican",
    year_elected: 1952,
    state_residence: "New York",
  },
];

// 1. Solution: Sort presidents by last name in reverse alphabetical order.
const sortArray = (array, prop, order = "standard") => {
  array.sort((a, b) => {
    let compare = {};

    if (order === "standard") {
      compare.negative = a[prop] < b[prop];
      compare.positive = a[prop] > b[prop];
    }

    if (order === "reverse") {
      compare.negative = a[prop] > b[prop];
      compare.positive = a[prop] < b[prop];
    }

    if (compare.negative) return -1;

    if (compare.positive) return 1;
  });

  return array;
};

sortArray(presidents, "last_name", "reverse");

// 2. Solution: Create a full_name key for each hash and set its value to a string in "LASTNAME, FIRSTNAME" format. Then sort the collection, first by party affiliation and then by the full name field.

// Create full_name key
const createFullName = (array) => {
  array.forEach((elm) => {
    elm["full_name"] = `${elm["last_name"]}, ${elm["first_name"]}`;
  });

  return array;
};

const presidentsFullName = createFullName(presidents);

// Sort by party affiliation
const presidentsSortParty = sortArray(presidentsFullName, "party");

// Sort by full name
sortArray(presidentsSortParty, "full_name");
