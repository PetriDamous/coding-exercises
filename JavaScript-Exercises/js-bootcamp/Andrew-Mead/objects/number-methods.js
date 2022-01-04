let num = 103.941;

// toFixed() trims the decmial place to number specified in method argument
console.log('toFixed: ',num.toFixed(2));  // 103.94

// Math.round() rounds up or down
console.log('Math.round: ',Math.round(num)); // 104

// Math.floor() rounds down
console.log('Math.floor: ',Math.floor(num)); // 103

// Math.ceil() rounds up
console.log('Math.ceil: ',Math.ceil(num)); // 104

// Math.random() random number between 0 and 1. 1 is excluded
console.log('Math.random: ',Math.random());

// Generating random number between 10 - 20

let min = 10;
let max = 20;

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('Random Number: ',randomNum);

console.log('\n');

// Challlenge area

/*

Create a random number guessing game that does the following:

1. Create a function that takes in a number
2. Create random number generator that generates a random number between 1 -5
3. Return true if the random number is the saem as number from argument, otherwise return false

*/

function makeGuess (num) {
    let min = 1;
    let max = 5;

    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNum === num;
}

console.log(makeGuess(1));
console.log(makeGuess(2));
console.log(makeGuess(3));
console.log(makeGuess(4));
console.log(makeGuess(5));

