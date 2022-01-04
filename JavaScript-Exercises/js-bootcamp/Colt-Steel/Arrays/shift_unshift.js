///////////////////// Shift and Unshift /////////////////////////////

// Unlike strings methods we use on an array mutate the array

/////////////////// shift() //////////////////////////////////

let food = ['beer', 'beef', 'chicken'];

// shift() removes the first item of an array and returns
// the removed item.

let removeStart = food.shift();

console.log(removeStart); // beer

console.log(food); // [ 'beef', 'chicken' ]

///////////////// unshift() //////////////////////////

food = ['beer', 'beef', 'chicken'];

// unshift() adds an item that we specify in the argument
// to the begining of an array and returns the new length
// of the array.

let addStart = food.unshift('honey turkey neckbones');

console.log(addStart); // 4

console.log(food); // [ 'honey turkey neckbones', 'beer', 'beef', 'chicken' ]

// When adding multiple items using unshift() the order in which
// we added the items with the unshift() method is preserved.

food = ['beer', 'beef', 'chicken'];

food.unshift('tacos', 'hot dogs');

console.log(food); // [ 'tacos', 'hot dogs', 'beer', 'beef', 'chicken' ]

// When adding items individually the previous item from the last
// item we added will come before.

food = ['beer', 'beef', 'chicken'];

food.unshift('tacos'); // will come after hot dogs

food.unshift('hot dogs'); // will come before tacos

console.log(food); // [ 'hot dogs', 'tacos', 'beer', 'beef', 'chicken' ]
