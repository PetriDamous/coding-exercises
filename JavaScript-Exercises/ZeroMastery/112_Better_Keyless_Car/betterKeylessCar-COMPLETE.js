// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.

var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

//ES5 SOLUTION
function checkDriverAge() {
	var age = prompt("What is thy age? (Please enter numerical value)");
  
	if(isNaN(age)){
	  console.log("Please enter a numerical value");
	} else {
	  if(Number(age) > 18) {
		console.log("Powering On. Enjoy the ride!");
	  } else if(Number(age) === 18) {
		console.log("Congratulations on your first year of driving. Enjoy the ride!");
	  } else {
		console.log("Sorry, you are too young to drive this car. Powering off");
	  }
	}
  }
  
  checkDriverAge();

//ES6 SOLUTION
const checkDriverAge = () => {
	let age = prompt("What is thy age? (Please enter numerical value)");
  
	if(isNaN(age)){
	  console.log("Please enter a numerical value");
	} else {
	  if(Number(age) > 18) {
		console.log("Powering On. Enjoy the ride!");
	  } else if(Number(age) === 18) {
		console.log("Congratulations on your first year of driving. Enjoy the ride!");
	  } else {
		console.log("Sorry, you are too young to drive this car. Powering off");
	  }
	}
  }
  
  checkDriverAge();

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

//ES5 SOLUTION
var checkDriverAge2 = function() {
	var age = prompt("What is thy age? (Please enter numerical value)");
  
	if(isNaN(age)){
	  console.log("Please enter a numerical value");
	} else {
	  if(Number(age) > 18) {
		console.log("Powering On. Enjoy the ride!");
	  } else if(Number(age) === 18) {
		console.log("Congratulations on your first year of driving. Enjoy the ride!");
	  } else {
		console.log("Sorry, you are too young to drive this car. Powering off");
	  }
	}
  }
  
  checkDriverAge2();

//ES6 SOLUTION
const checkDriverAge2 = () => {
	var age = prompt("What is thy age? (Please enter numerical value)");
  
	if(isNaN(age)){
	  console.log("Please enter a numerical value");
	} else {
	  if(Number(age) > 18) {
		console.log("Powering On. Enjoy the ride!");
	  } else if(Number(age) === 18) {
		console.log("Congratulations on your first year of driving. Enjoy the ride!");
	  } else {
		console.log("Sorry, you are too young to drive this car. Powering off");
	  }
	}
  }
  
  checkDriverAge2();

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
checkDriverAge(92);
it returns "Powering On. Enjoy the ride!"

//ES5 SOLUTION 
var age = prompt("Please enter thy age (Numerical values only)");

function checkDriverAge3(age) {
  if(isNaN(age)) {
    console.log('Please enter numerical value!!');
  } else {
    if(Number(age) === 18) {
      return "Congratulations on your first year of driving. Enjoy the ride!";
    } else if(Number(age) < 18) {
      return "Sorry, you are too young to drive this car. Powering off";
    } else {
      return "Powering On. Enjoy the ride!";
    }
  }
}

checkDriverAge3(age);

//ES6 SOLUTION 
const age = prompt("Please enter thy age (Numerical values only)");

const checkDriverAge3 = (age) => {
  if(isNaN(age)) {
    console.log('Please enter numerical value!!');
  } else {
    if(Number(age) === 18) {
      return "Congratulations on your first year of driving. Enjoy the ride!";
    } else if(Number(age) < 18) {
      return "Sorry, you are too young to drive this car. Powering off";
    } else {
      return "Powering On. Enjoy the ride!";
    }
  }
}

checkDriverAge3(age);
	
//Function Expression
var age = prompt("Please enter thy age (Numerical values only)");

var checkDriverAge3 = function(age) {
  if(isNaN(age)) {
    console.log('Please enter numerical value!!');
  } else {
    if(Number(age) === 18) {
      return "Congratulations on your first year of driving. Enjoy the ride!";
    } else if(Number(age) < 18) {
      return "Sorry, you are too young to drive this car. Powering off";
    } else {
      return "Powering On. Enjoy the ride!";
    }
  }
}

checkDriverAge3(age);