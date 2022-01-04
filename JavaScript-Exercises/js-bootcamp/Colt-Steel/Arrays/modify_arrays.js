////////////////// Mofifying Array ///////////////////

let food = ['milk', 'cookies', 'tacos'];

// Unlike strings which are unmutalbe, arrays
// are mutable. We can replace an item in an
// array by accessing the index of the item we
// wish to replace and setting it equal to the 
// new item we wish to replace with.

food[0] = 'beer';

console.log(food); // [ 'beer', 'cookies', 'tacos' ]

// We can also access the last item of an array in
// similar manor of accessing the last sub string of a string

console.log(food[food.length - 1]); // tacos

//////////////// Adding items to the end of the array ///////////////

food = ['milk', 'cookies', 'tacos'];

// By accessing the index that comes right after the last 
// array items index we can add an item to the end of an array

food[3] = 'chips'; // [ 'milk', 'cookies', 'tacos', 'chips' ]

console.log(food);

//////////////////////////////////////////////////////////////////////

food = ['milk', 'cookies', 'tacos'];

// Alternativly we can add an item to the end of an array
// by accessing the length of an array inside of the []

food[food.length] = 'wiskey'; // [ 'milk', 'cookies', 'tacos', 'wiskey' ]

console.log(food);