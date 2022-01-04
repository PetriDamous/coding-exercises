// In the includes lesson we learned about how object references work
// The same concept is used with primiatives

// When we store a value in a variable the variable is referencing that object or 
// primiative in memory

// Since we already know about how this works with objects (refer to .inlucdes method lesson)
// we will be focusing on primatives

let a = 2;

let b = 2;

let c = b;

// These will all return true because they are pointing to the same 2 in memory
console.log(a === b); // true

console.log(b === c); // true

console.log(c === a); // true

console.log('\n');

a = 3;

// Will return false because a now refers to 3 instead of 2
console.log(a === b); // false

// Stays true because both variables b and c are still pointing to 2
console.log(b === c); // true

// Becomes false because variable a now points to 3 instead of 2
// variable c is still pointing to 2
console.log(c === a); // false