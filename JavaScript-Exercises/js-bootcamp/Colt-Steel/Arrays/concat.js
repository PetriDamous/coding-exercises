////////////////// Concat ///////////////////////////


// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const oldGames = ['Super Mario', 'Star Fox', 'Sparkster'];

const newGames = ['Call of Duty', 'Resident Evil 6', 'Muv-luv'];

const combinedGames = oldGames.concat(newGames);

// Elements from array that method was called on come first.
// Elements from array provided. 
console.log(combinedGames);

/* 

[ 'Super Mario',
  'Star Fox',
  'Sparkster',
  'Call of Duty',
  'Resident Evil 6',
  'Muv-luv' ]

*/

// Original array is un modified
console.log(oldGames); // [ 'Super Mario', 'Star Fox', 'Sparkster' ]

// Original array is un modified
console.log(newGames); // [ 'Call of Duty', 'Resident Evil 6', 'Muv-luv' ]

// Other example calling method on newGames array.

const newFirst = newGames.concat(oldGames);

console.log(newFirst);

/*

[ 'Call of Duty',
  'Resident Evil 6',
  'Muv-luv',
  'Super Mario',
  'Star Fox',
  'Sparkster' ]

*/

// .concat() has an optional value or values
// You can pass in as many arrays to the argument and they will be combinded together.

const numbers = [1, 2, 3];

const combinedNums = numbers.concat([4, 5, 6], [7, 8, 9], [10, 11, 12]);

console.log(combinedNums); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

//////////////////// Concatenating values to an array /////////////////////

// .concat() can also be used to concat values to an array

const num = [1, 2, 3];

const alphaNum = num.concat('a', 'b', 'c');

console.log(alphaNum); // [ 1, 2, 3, 'a', 'b', 'c' ]

/////////////////// Concatenating nested arrays /////////////////////////

// The following code concatenates nested arrays and demonstrates retention of references.

const num1 = [[1]];
const num2 = [2, [3]];

const numnuts = num1.concat(num2);

console.log(numnuts); // [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);

console.log(numnuts); // [ [ 1, 4 ], 2, [ 3 ] ]

// Note: Look into objects and references to fully understand above code.