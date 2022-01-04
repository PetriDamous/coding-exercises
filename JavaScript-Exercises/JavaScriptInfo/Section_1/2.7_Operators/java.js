// What are the final values of all variables a, b, c and d after the code below?

let a = 1, b = 1;

let c = ++a; // 
let d = b++; // 

console.log(a); //2
console.log(b); //2
console.log(c); //2
console.log(d); //1

alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value

alert( a ); // 2, incremented once
alert( b ); // 2, incremented once

// What are the values of a and x after the code below?

let a = 2;

let x = 1 + (a *= 2);

console.log(a); // 4

console.log(x); // 5

