////////// parseInt and parseFloat ///////////////

// Both convert a string into a number

//////////////// parseInt() /////////////////////////

// parseInt will parse a string and return an integer

console.log(parseInt('5')); // 5

// Will only return integer.
// Decmials get cut off.
console.log(parseInt('5.6666')); // 5

console.log(parseInt('I like turtles')); // NaN

// Returns 3 because if finds a numeric value at the begning of the string
console.log(parseInt('3d')); // 3

// Returns NaN because the numeric value is not at the begning of the string
console.log(parseInt('d3')) // NaN

// Note: spaces don't matter

////////////////// parseFloat() //////////////////////////

// Same as parseInt(), but used on floats.

console.log(parseFloat('6.666')); // 6.666

console.log(parseFloat('7')); // 7

console.log(parseFloat('I like turtles')); // NaN

console.log(parseFloat('3.333d')); // 3.333

console.log(parseFloat('d3.3333')); // NaN

//////////// Other Examples /////////////////////

console.log(parseInt('1') + 1); // 2

console.log(parseFloat('2.22') * 2); // 4.44