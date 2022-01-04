////////////////// Array/Object Equailty //////////////////////////

// Equailty for arrays and objects (=== or ==) only check
// for equailty of reference to the array or object.

// === or ==  does not check to see if the contents of an object or
// array are the same.

const array1 = [1,2,3];

const array2 = [1,2,3];

// Even though the contents are the same, the reference to the arrays
// are not the same.
console.log(array1 === array2); // false

const array3 = array1;

// array3 and array1 are referencing the same array in memory so they will
// be equal.
console.log(array3 === array1); // true