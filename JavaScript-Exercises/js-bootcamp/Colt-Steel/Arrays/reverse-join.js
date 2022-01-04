///////////////// reverse() and join() //////////////////


///////////////// reverse() /////////////////////////////

// Reverses the order of array items

// Does mutate the array (modifies existing array)

const array1 = ['C','h','r','i','s'];

array1.reverse(); 

console.log(array1); // [ 's', 'i', 'r', 'h', 'C' ]

////////////////// join() ////////////////////////////

// Joins items in an array together as a string

// Takes a string as an argument.

// String character will be placed between array items when
// they are joined together as a string.

const array2 = ['S','T','A','R','S'];

let arrayNoSpace = array2.join('');

console.log(arrayNoSpace); // STARS

let arraySpace = array2.join(' ');

console.log(arraySpace); // S T A R S

let arrayPeriod = array2.join('.');

console.log(arrayPeriod); // S.T.A.R.S

// When using non string values such as numbers or booleans
// the value will be converted over to a string

const noStrings = [1, true, 3.14, false];

arrayNoSpace = noStrings.join('');

console.log(arrayNoSpace); // 1true3.14false

arraySpace = noStrings.join(' ');

console.log(arraySpace); // 1 true 3.14 false

arrayPeriod = noStrings.join('.');

console.log(arrayPeriod); // 1.true.3.14.false