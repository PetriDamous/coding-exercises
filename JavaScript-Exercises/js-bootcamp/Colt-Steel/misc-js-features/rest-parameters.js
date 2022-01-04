// OLD WAY!
function sum() {
  const argsArr = [...arguments]
  return argsArr.reduce((total, currVal) => {
    return total + currVal
  })
}

// New way using rest:
function sum(...nums) {
  return nums.reduce((total, currVal) => {
    return total + currVal
  })
}

// The arguments object returns all arguments passed to a function

// Rest parameter just returns the un named parameters to the function

// We can have named params and then collect the rest into an array:
function fullName(first, last, ...titles) {
  console.log('first', first)
  console.log('last', last)
  console.log('titles', titles)
}

console.log(fullName('Jack', 'Ass', 'III', 'Jr.', 'Sr.'));

/*

first Jack
last Ass
titles [ 'III', 'Jr.', 'Sr.' ]

*/


// You rest parameter must come last:
function fullName(...titles, first, last) {
  console.log('first', first)
  console.log('last', last)
  console.log('titles', titles)
}

// This will produce an error.

// We can use rest parameters in arrow functions!
// You could not do this with the arguments object
const multiply = (...nums) => (
  nums.reduce((total, currVal) => total * currVal)
)