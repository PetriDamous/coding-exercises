// Type Coercion - string, number, boolean
// Avoid type coercion with strings and numbers

// Adding a string number to another number concats the two producing a new string
console.log('string number + number: ', '5' + 5, typeof ('5' + 5)); // 55

// Subtracting string number to a number will perform the math operation
console.log('string number - number: ', '5' - 5, typeof ('5' - 5)); // 0

// Loose equality operator will be return true if a sting number and number are the same
// Loose equality doesn't check for type
// Note: Adrew says we should avoid using loose equailty
console.log('loose equality: ', '5' == 5); // true

// Strict equilty operator does check for type
console.log('strict equality: ', '5' === 5); // false

// We can use the keyword typeof to check for the typeof data structure or primitive
console.log('number: ', typeof 5); // number

console.log('string: ', typeof 'I like dogs'); // string

console.log('boolean: ', typeof false); // boolean

console.log('object: ', typeof {}); // object

console.log('object: ', typeof []); // object

console.log('\n');

// When using a math operator booleans are converted to numbers
// false becomes 0 and true becomes 1

var value =  true + 12; 
var type = typeof value;
console.log('value: ', value); // 12
console.log('type: ', type); // number

console.log('\r');

var value =  false + 12; 
var type = typeof value;
console.log('value: ', value); // 13
console.log('type: ', type); // number

