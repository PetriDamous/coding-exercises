// .includes() is an array method that checks to see if a given element is inside of an array

const myArray = [1,2,3,4,5];

// First Argument is what we want to check for
console.log(`Checking for 2: ${myArray.includes(2)}`); // true

console.log(`Checking for 7: ${myArray.includes(7)}`); // false

console.log('\n');

// .includes() also takes in a second argument
// This second argument is the index from where we want to start at

console.log(`Checking for 2 at 3rd index: ${myArray.includes(2, 3)}`); // false

console.log(`Checking for 2 at index 1: ${myArray.includes(2, 1)}`); // true

// Note: The examples above are examples when working with primatives. Working with objects is a bit different

console.log('\n');

// We cannot directly use includes on an object

// In the example below the object inside of our array might be in a different place in memory
// from when we call on the object using the .includes method

const objArray1 = [{id: 1}, {id: 2}, {id: 3}];

console.log(objArray1.includes({id: 1})); // false

console.log('\r');

// Here we have two objects that look the same
const obj1 = {id: 1}

const obj2 = {id: 1}

// We get false because both these variables are pointing to two different objects in memory
// even though the properties inside of the objects are the same
console.log(obj1 === obj2); // false

console.log('\r');

// Much like primitives we can store an object reference inside of another object reference
// so that both references are pointing to the same object
const obj3 = {id: 2};

const obj4 = obj3;

console.log(obj3 === obj4); // true

console.log('\r');

// Muchs like primatives when we change the value of the reference it will reflect 
// in all references that reference that object

obj3.id = 25;

console.log(`obj3 id value change to 25: ${obj3.id}`); // 25

console.log(`obj4 id value is changed to 25 as well: ${obj4.id}`); // 25

console.log(obj3 === obj4); // true

console.log('\r');

// That being said in order for the .includes() method to work
// we will have to use a reference to the object

const o1 = {id: 1};

const o2 = {id: 2};

const o3 = {id: 3};

const oArray = [o1, o2, o3];

// Returns true because we are using the object reference to find the object in memory
console.log(oArray.includes(o1)); // true
