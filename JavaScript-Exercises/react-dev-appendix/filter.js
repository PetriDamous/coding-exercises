// Filter is an array method
// Filter will filter out values of an array and store them in a new array
// Filter uses a function to return true or false values
// Values that return false are left out of the new array
// Valuse that return true are pushed to the new array

const myArray = [1,4,6,8,3,9,2];

const underFive = myArray.filter(elm => elm < 5 );

// only pushes numbers under 5 to the new array
console.log(underFive); // [ 1, 4, 3, 2 ]

// does not mutate original array
console.log(myArray); // [1,4,6,8,3,9,2]