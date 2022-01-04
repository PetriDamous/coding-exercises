// The map array method allows us to perform an operation on each
// individual array element
// This method returns a brand new array

const myArray = [1, 2, 3, 4];

// map method takes the elements of the array as arguments

let newArray = myArray.map(elm => elm + 2);

// Old array is not mutated
console.log(myArray); // [1, 2, 3, 4]

// New returned array
console.log(newArray); // [2,4,6,8]

// We can also just re-map elements in an array without passing an element as an argument
let otherArray = myArray.map(() => "b");

// returns [ 'b', 'b', 'b', 'b' ]
console.log(otherArray);