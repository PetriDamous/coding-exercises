///////////////////////////// slice /////////////////////////////////////

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const re1 = ['Barry', 'Chris', 'Jill', 'Wesker', 'Forest'];

// Returns copy of full array
console.log(re1.slice()); // [ 'Barry', 'Chris', 'Jill', 'Wesker', 'Forest' ]

// Index in 2nd argument is not inclusive
console.log(re1.slice(0, 3)); // [ 'Barry', 'Chris', 'Jill' ]

console.log(re1.slice(2)); // [ 'Jill', 'Wesker', 'Forest' ]

// Since the end (2nd argument) is not included you can 
// go one value out of the array to grab the last
// array item
console.log(re1.slice(3, 6)); // [ 'Wesker', 'Forest' ]

// 1st argument counts backwards 4 array items (no zero index counting backwards)

// 2nd argument will stop at 3 backwards 'Jill' but since
// the second argument is not inclusive the slice stops at 'Chris'
console.log(re1.slice(-4, -3)); // [ 'Chris' ]

// Starts and will include Barry.

// Will stop at Jill but not include her.
console.log(re1.slice(-5, -3)); // [ 'Barry', 'Chris' ]

// Store shallow copy of array in variable
let sliceCopy = re1.slice(-1);

console.log(sliceCopy); // Forest

console.log(re1); // [ 'Barry', 'Chris', 'Jill', 'Wesker', 'Forest' ]



// slice does not alter the original array. It returns a shallow copy of elements from the original array. Elements of the original array are copied into the returned array as follows:

    // For object references (and not the actual object), slice copies object references into the new array. Both the original and new array refer to the same object. If a referenced object changes, the changes are visible to both the new and original arrays.

    // For strings, numbers and booleans (not String, Number and Boolean objects), slice copies the values into the new array. Changes to the string, number, or boolean in one array do not affect the other array.

// If a new element is added to either array, the other array is not affected.

const cars = ['honda', 'toyota', 'ford', 'chevy', 'gmc'];

// Creates shallow copy of cars array
const copyCars = cars.slice();

console.log(copyCars); // [ 'honda', 'toyota', 'ford', 'chevy', 'gmc' ]

console.log(cars); // [ 'honda', 'toyota', 'ford', 'chevy', 'gmc' ]

// Will only effect copyCars array
copyCars.pop();

console.log(copyCars); // [ 'honda', 'toyota', 'ford', 'chevy' ]

// Will only effect cars array
cars.shift();

console.log(cars); // [ 'toyota', 'ford', 'chevy', 'gmc' ]