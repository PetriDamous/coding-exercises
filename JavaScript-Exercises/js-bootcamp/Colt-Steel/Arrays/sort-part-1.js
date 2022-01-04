///////////////////////// sort() Part 1 ////////////////////////////////////

// The sort() method sorts the elements of an array in place and returns the sorted array. 
// The default sort order is ascending, built upon converting the elements into strings, 
// then comparing their sequences of UTF-16 code units values.

//////////////////////////// Syntax ///////////////////////////////////

// arr.sort([compareFunction])

////////////////////////// Sorting strings /////////////////////////////

let re2 = ['Leon', 'Claire', 'Ada', 'Sherri', 'William'];

// Returns sorted array incase we want to use it later
let sortedArray = re2.sort();

console.log(sortedArray); // [ 'Ada', 'Claire', 'Leon', 'Sherri', 'William' ]

// Sorts original array in place
console.log(re2); // [ 'Ada', 'Claire', 'Leon', 'Sherri', 'William' ]