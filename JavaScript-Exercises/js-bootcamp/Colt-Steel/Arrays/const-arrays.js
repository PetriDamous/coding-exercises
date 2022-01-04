/////////////// const on arrays //////////////////////

// As we know if primative types we cannot change the value
// of a variable that is defined by const

const name = 'Chris Redfield';

name = 'Jill Valentine'; // Error: "name" is read-only

// Since arrays are not stored inside of variables 
// we can modify an array since the variable is only
// pointing to a reference in memory where the array 
// is stored.

const re1 = ['Wesker', 'Barry', 'Chris'];

re1.push('Jill');

console.log(re1); // [ 'Wesker', 'Barry', 'Chris', 'Jill' ]

re1.unshift('Leon?');

console.log(re1); // [ 'Leon?', 'Wesker', 'Barry', 'Chris', 'Jill' ]

re1.splice(2, 2);

console.log(re1); // [ 'Leon?', 'Wesker', 'Jill' ]

// When we point to a differnt array we get an error
// since we are changing the refence that is pointing to the
// array we where targeting.

re1 = [1, 2, 3]; // "re1" is read-only

// In this case it is similar to overwriting a value variable reference

