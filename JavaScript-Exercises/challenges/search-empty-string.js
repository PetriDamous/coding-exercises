//////////////////// Finding or checking for empty string ///////////////////

// Using .includes();

// If an empty substring is found within a string then true will be 
// returned. If not then false will be returned.

// Take note that spacing does not matter.

let myStr = 'I like chicken';

console.log(myStr.includes(' ')); // true

myStr = 'I    love           turtles';

console.log(myStr.includes(' ')); // true

myStr = 'IlikeChicken';

console.log(myStr.includes(' ')); // false

// Using .indexOf();

// We can also find the posistion of an empty substring.
// Remember when using .indexOf() if substing cannot be 
// found within a string -1 is returned.

myStr = 'Super donkey kick';

console.log(myStr.indexOf(' ')); // 5

myStr = 'He     ran    away?';

console.log(myStr.indexOf(' ')); // 2

myStr = 'ChrismuthfuckinReidfield!!!!!';

console.log(myStr.indexOf(' ')); // -1


////////////////// Exercise //////////////////////////////

// Write a simple password checker that checks for a character lenght
// of 12 or greater and cannot contain any spaces.

// Write one with .indexOf() and another one using .includes()



// .indexOf()

let password = 'DogManX1234566667';

if (password.length >= 12 && password.indexOf(' ') === -1) {
  console.log('Password meets requirements');
} else {
  console.log('Password does not meet requirements');
}


// .includes()

password = 'DogManXkdsjlfajfjkajkfjakjfk';

if (password.length >= 12 && !password.includes(' ')) {
  console.log('You are signing in');
} else {
  console.log('Password is invalid');
}