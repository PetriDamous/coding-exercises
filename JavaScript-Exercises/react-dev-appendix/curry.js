/*

Currying is the technique of translating the evaluation of 
a function that takes multiple arguments into evaluating a sequence
of functions, each with a single argument.

*/

// Non curried way:

const add = (a, b) => a + b;

console.log(add(10, 4)); // 14

console.log('\n');

// Curried way:
const addCurried = (a) => (b) => a + b;

// Stores our curried function into a variable to be used later on
// 10 represents the argument a in our addCurried function from above
const add10 = addCurried(10);

const add20 = addCurried(20);

// Now that we stored our curried function with the first argument stored in a variable
// we can now call on our new function and pass in the b argument of our curried function from above
console.log(add10(5)); // 15

console.log(add20(30)); // 50


/*

The benifit of using curring is that we can create multiple utility functions
using one function as a base.

In the above example we created two new functions that allowed us to add a base number (10 and 20)
by another number that we would pass in later when our new functions are called on (add10 and add20).

add10(5) and add20(30) is like writing:

addCurried(10)(5) // 15

addCurried(20)(30) // 50

*/