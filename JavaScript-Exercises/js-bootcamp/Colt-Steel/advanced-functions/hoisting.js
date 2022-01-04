variables declared with var are hoisted
console.log(animal);
var animal = 'Tapir';
console.log(animal);


variables declared with let & const are not hoisted
const shrimp = 'Harlequin Shrimp';
console.log(shrimp);

function statements are hoisted
howl();

function howl() {
  console.log("AWOOOOOOO");
}

// function expressions are...kind of hoisted.
// The variable is hoisted, but has a value of undefined
// Acts the same when using var, let, const on variables
// var is kind of hoisted
// let and const are not hoisted
hoot()
var hoot = function () {
  console.log("HOOOO HOOOOO")
}