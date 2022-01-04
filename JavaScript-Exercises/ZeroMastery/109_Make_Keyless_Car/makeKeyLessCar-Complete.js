// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:


//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"


//ES5 Solution without converter function
var age = prompt("What is thy age?");

function numChk(age) {
  if(isNaN(age)){
    console.log("Please enter a numerical value")
  } else {
    ageChk(age);
  }
}

function ageChk(age) {
  if(Number(age) < 18) {
    console.log("Sorry, you are too young to drive this car. Powering off");
  } else if(Number(age) === 18) {
    console.log("Congratulations on your first year of driving. Enjoy the ride!");
  } else if(Number(age) > 18) {
    console.log("Powering On. Enjoy the ride!");
  }
}

numChk(age);


//ES6 Solution with converter function
let age = prompt("What is thy age?");

const numChk = age => {
  if(isNaN(age)){
    console.log("Please enter a numerical value")
  } else {
    numConvert(age);
  }
}

const numConvert = age => {
  age = Number(age);
  ageChk(age);
}

const ageChk = age => {
  if(age < 18) {
    console.log("Sorry, you are too young to drive this car. Powering off");
  } else if(age === 18) {
    console.log("Congratulations on your first year of driving. Enjoy the ride!");
  } else if(age > 18) {
    console.log("Powering On. Enjoy the ride!");
  }
}

numChk(age);
