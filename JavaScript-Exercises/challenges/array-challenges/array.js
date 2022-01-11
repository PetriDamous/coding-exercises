// Challenge 1
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1. Remove the last item from the vegetable array.
// 2. Remove the first item from the fruit array.
// 3. Find the index of "orange."
// 4. Add that number to the end of the fruit array.
// 5. Use the length property to find the length of the vegetable array.
// 6. Add that number to the end of the vegetable array.
// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
// 8. Remove 2 elements from your new array starting at index 4 with one method.
// 9. Reverse your array.
// 10. Turn the array into a string and return it.

// If you've done everything correctly,
// the last step should print the following string to the console

// 3,pepper,1,watermelon,orange,apple

// Challenge 2
// Sort array by last name in alphabetical order

const names = [
  "John Smith",
  "Dan Boone",
  "Jennifer Jane",
  "Charles Lindy",
  "Jennifer Eight",
  "Rob Roy",
];

// Challenge 3
// Using loops, write a script that will fill a two-dimensional array with the product of each row-index and column-index, for integers 0 through 9.

// The value in arr[4][6] should be 24. And arr[0][4] should be 0. And so on.

// output
const output = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 2, 4, 6, 8, 10, 12, 14, 16, 18],
  [0, 3, 6, 9, 12, 15, 18, 21, 24, 27],
  [0, 4, 8, 12, 16, 20, 24, 28, 32, 36],
  [0, 5, 10, 15, 20, 25, 30, 35, 40, 45],
  [0, 6, 12, 18, 24, 30, 36, 42, 48, 54],
  [0, 7, 14, 21, 28, 35, 42, 49, 56, 63],
  [0, 8, 16, 24, 32, 40, 48, 56, 64, 72],
  [0, 9, 18, 27, 36, 45, 54, 63, 72, 81],
];

// Challenge 4

// 1. Sort presidents by last name in reverse alphabetical order.

// 2. Create a full_name key for each hash and set its value to a string in "LASTNAME, FIRSTNAME" format. Then sort the collection, first by party affiliation and then by the full name field.

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
