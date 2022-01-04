//////////////// Operator Precedence //////////////////////

// Order of logical operators

// 1. !
// 2. && 
// 3. ||

// Lets evaluate the following expression

let num = 7;

num === 7 || num === 3 && num > 10;

// === and > are evaluated 1st since they have a higher precedence than && and ||
true || false && false;

// && is evaluted next since it has a higher precedence than ||
true || false;

// true is the final value
true;

console.log(num === 7 || num === 3 && num > 10); // true


// () have the highest precendence so they always win out

num = 7;

(num === 7 || num === 3) && num > 10;

// () have highest precedence so whatever is between them
// gets evaluated first.
false && num > 10;

// > is evaluated next
false && false;

// false is the final value
false;

console.log((num === 7 || num === 3) && num > 10); // false