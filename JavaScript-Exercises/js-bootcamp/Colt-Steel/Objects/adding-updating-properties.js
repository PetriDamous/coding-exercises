//////////////////// Updating and Adding properties ////////////////////

const gameReview = {};

// Adds key of re1 with a value of 4.9 using
// dot notation
gameReview.re1 = 4.9;

console.log(gameReview); // { re1: 4.9 }

// Adds a key of re2 with a value of 10
gameReview['re2'] = 10;

console.log(gameReview); // { re1: 4.9, re2: 10 }

// Increments re1's value by 1
gameReview.re1++

console.log(gameReview); // { re1: 5.9, re2: 10 }

// Sets re2's value to 2
gameReview.re2 =+ 2;

console.log(gameReview); // { re1: 5.9, re2: 2 }