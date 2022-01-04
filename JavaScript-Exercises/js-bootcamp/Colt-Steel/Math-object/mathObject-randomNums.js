////////////// Math Object ////////////////////////////

// Contains properties and methods for mathematical
// constants and functions.


///////////////// Math.PI ///////////////////////////

// Returns the value of PI
console.log(Math.PI); // 3.141592653589793

//////////////// .round() //////////////////////////

// Rounds a number up or down
console.log(Math.round(4.9)); // 5

///////////// .floor() ////////////////////////////

// Cuts off decimal point
console.log(Math.floor(4.9)); // 4

///////////// .ceil() ///////////////////////////

// Rounds number up and cuts off decimal point
console.log(Math.ceil(4.9)); // 5

/////////////// .abs() ////////////////////////

// Returns absolute value
console.log(Math.abs(-425)); // 425

////////////// .pow() ///////////////////////////

// 1st argument is the number we want to raise by the power of
// 2nd argument is the power we want to rais the number of

// Raising 2 by the power of 5
console.log(Math.pow(2, 5)); // 32

// Not part of the math object but we can also find the power of a number by
// placing ** on the number we want to find the power of followed by the power
console.log(2**5);

///////////////////// random() /////////////////////////

// Gives use a number between 0 and 1 (non-inclusive)
console.log(Math.random()); // Will return a random decimal number that is less than 1

/////////////////// Random Integer (whole number) /////////////////

// Generating a random number between 1 and 10.

// We can generate a random whole number by using these 4 steps.

// Step 1 we generate a random number between 0 and 1.
const step1 = Math.random(); // 0.45677804940

// Step 2 we multiply by 10 to move the decimal place to get a whole number
// with decimals.
const step2 = step1 * 10; // 4.5677804940

// Step 3 we cut off the decimal point using .floor().
const step3 = Math.floor(step2); // 4

// Step 4 we add 1 because if we want a random number between 0 and 10
// what we did in step 3 will not include 10. It would stop at 9 as the highest
// number. 
const step4 = step3 + 1;

// The steps above are normally done in one line like this.
const singleStep = Math.floor(Math.random() * 10) + 1;

console.log(singleStep);

// Note: If you want to genrate a random number between some other number
// than 10, for example 20, just change the multipler to the number you wish
// to genrate a random number up to (20 if you want 0 to 20).