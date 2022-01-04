////////////////// Value types variables /////////////////////////

// Value type variables are variables that 
// hold primative values in its own memory space. 
// In other words the primative is directly stored inside of 
// the variable. 

// String is stored in variables memory space
let fruit = 'orange';

// The value of fruit primative is stored in
// the color variable
let color = fruit;

// Both variables are storing a value of 'orange'.

// Both variable values are not connected to each other
// and the values are stored in each variables own
// memory space.
console.log(fruit); // orange

console.log(color); // orange

// fruit is updated with a new value to take up its memory space
fruit = 'watermelon';

// The change only effects fruit as the new update only had an
// effect on the fruits variables memory space.
console.log(fruit); // watermelon

console.log(color); // orange

///////////////////// Reference type variables ///////////////////////

// Objects and Arrays in JavaScript are handled differently than primative types
// when it comes to storing them in variables.

// Objects and Arrays can store large amounts of data so its better to give
// these their own space in memory.

// When we store an object or array on a variable we are not storing
// the object or array itself inside of the variable.

// Instead we are storing a reference to the memory address where the object
// or array is located in memory.

// That means we can have two variables point to an object or array and
// if we modify one of the variables pointing to that object or array
// the modification will effect the other variable that references that
// object or array.

// The variables that store objects and arrays are known as 
// reference type variables because they only store a reference
// to an array or object.

// Stores a reference to array created in memory
let ref1 = [1, 2, 3, 4, 5];

// Stores a reference to the array ref1 is pointing 
// to inside of ref2
let ref2 = ref1;

console.log(ref1); // [ 1, 2, 3, 4, 5 ]

console.log(ref2); // [ 1, 2, 3, 4, 5 ]

// Will modify both refences to the array ref1 and ref2
// are pointing to.
ref1.pop();

console.log(ref1); // [ 1, 2, 3, 4 ]

console.log(ref2); // [ 1, 2, 3, 4 ]

// https://www.tutorialsteacher.com/csharp/csharp-value-type-and-reference-type