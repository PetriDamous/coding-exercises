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
