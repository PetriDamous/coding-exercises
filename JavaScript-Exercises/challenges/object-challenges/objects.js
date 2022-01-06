/**
 * Challenge 1
 *
 * Write a function that returns an array of
 * objects from an array of arrays.
 *
 *
 */

// Turn this
const petsArray = [
  ["dog", "Fido"],
  ["cat", "Whiskers"],
  ["pig", "Wilbur"],
];

// Into this
const newPetsArray = [
  {
    dog: "Fido",
  },
  {
    cat: "Whiskers",
  },
  {
    pig: "Wilbur",
  },
];

/**
 * Challenge 2
 *
 * Using the sample campaign finance data from above, change each row (sub-array) into an equivalent objects
 *
 */

// Turn this
const dataArray = [
  ["Name", "State", "Candidate", "Amount"],
  ["John Doe", "IA", "Rep. Smithers", "$300"],
  ["Mary Smith", "CA", "Sen. Nando", "$1,000"],
  ["Sue Johnson", "TX", "Rep. Nguyen", "$200"],
];

// To this
const newDataArray = [
  {
    Name: "John Doe",
    State: "IA",
    Candidate: "Rep. Smithers",
    Amount: "$300",
  },
  {
    Name: "Mary Smith",
    State: "CA",
    Candidate: "Sen. Nando",
    Amount: "$1,000",
  },
  {
    Name: "Sue Johnson",
    State: "TX",
    Candidate: "Rep. Nguyen",
    Amount: "$200",
  },
];

/**
 * Challenge 3
 *
 * Write a function that takes a string and returns
 * an object that has the letter as a property and the number
 * of occurrences of the letter for the value
 *
 */

// Turn this
const str = "abbcccc";

// To this
const obj = {
  a: 1,
  b: 2,
  c: 4,
};
