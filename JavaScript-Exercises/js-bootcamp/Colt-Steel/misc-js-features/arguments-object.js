//The arguments object is available in every function you write (except arrow functions)
//It contains all the arguments passed in.

function sum() {
  //It is NOT an array, we have to turn it into one if we want to use array methods

  const argsArr = [...arguments]
  return argsArr.reduce((total, currVal) => {
    return total + currVal
  })
}

// No arguments object inside of arrow functions :(
  
const multiply = () => {
  console.log(arguments);
}

// There isn't away to have arugments we want and then
// leave it open to any number of arguments

// The arguments object captures all arguments so
// we have to be mindful of what is captured

// In this example we already have first and last
// but would like to have arguemnts just contain
// any extra arguemnts.

// We cannot do that so we just have to be aware
// that first and last will be included with
// the rest of the arguments.

function character (first, last) {
  console.log(first);
  console.log(last);
  console.log(arguments);
}

character('Chris', 'Redfield', 45, { game: 're1'});