//////////////////// Object literal /////////////////////////

// Declares an object literal
{}

// Creaes reference to object
const reGames = {
  re1: 'Chris',
  re2: 'Leon',
  re3: 'Jill',
  4: 'Leon'
}

// Accessing property using dot notation
console.log(reGames.re1); // Chris

console.log(reGames.re2); // Leon

// Behind the senses the key in the key value pair is 
// converted over to a string.

// We cannot access a number using the dot notation

// The key 4 is has been converted to a string '4'
// so when using 4 on the dot notation JavaScript doesn't
// know what to do with it
console.log(reGames.4); // Error: Unexpected token

// In order to access a number when used as a key
// we use the bracket notation
console.log(reGames[4]); // Leon