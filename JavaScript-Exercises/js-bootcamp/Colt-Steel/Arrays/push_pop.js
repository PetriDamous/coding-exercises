///////////////////// Push and Pop /////////////////////////////

// Unlike strings methods we use on an array mutate the array

/////////////////// push() //////////////////////////////////

let food = ['beer', 'beef', 'chicken'];

// push() adds item in argument to the end of the array and returns the
// new length of the array.
let arrayLength = food.push('poke bowel');

console.log(arrayLength); // 4

console.log(food); // [ 'beer', 'beef', 'chicken', 'poke bowel' ]

///////////////// pushing multiple items ///////////////////////////////

food = ['beer', 'beef', 'chicken'];

// We can push multiple items to an array.
food.push('tacos', 'hot dogs');

console.log(food); // [ 'beer', 'beef', 'chicken', 'tacos', 'hot dogs' ]

//////////////// pop() ///////////////////////////////////////

food = ['beer', 'beef', 'chicken', 'human children'];

// pop() on the other hand removes the last item in an array
// and returns that item.

let popedValue = food.pop();

console.log(popedValue); // human children

console.log(food); // [ 'beer', 'beef', 'chicken' ]