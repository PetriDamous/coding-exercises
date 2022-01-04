// Will alert be show?

if ("0") {
    alert('Hello');
}

// Answer is yes because any string except for an empty one ("") will return true

// With if..else construct, write the code which asks: "What is the official name of JavaScript?"
// If the visitor enters "ECMAScript", then output "Right!"
// Otherwise output: "Didn't know? ECMA Script!"

let userAnswer = prompt(`What's the "official" name of JavaScript?`, `Enter answer`);

if(userAnswer == "ECMAScript") {
    alert("Damn right!!");
} else {
    alert("Didn't know? ECMA Script!");
}

/*
Using if..else, write the code which gets a number via prompt and then shows in alert:
    1. 1, if the value is greaer than zero
    2. -1, if less than zero
    3. 0 if equals zero

In this task we always assume the input will be a number

*/

let userNum = prompt('Please enter a number', 'Enter a number please!!!');

if(userNum > 0) {
    alert(1);
} else if(userNum < 0) {
    alert(-1);
} else {
    alert(0);
}

/*
    Rewrite the following to use the conditional operator '?' (tenary)

    let result;

    if (a + b < 4) {
        result = 'Below';
    } else {
        result = 'Over';
    }

*/

let result = (a  + b < 4) ? 'Below' : 'Over';

/*

Rewrite if..else using multiple ternary operators '?'.

For readability, it’s recommended to split the code into multiple lines.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}


*/

let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' : 
    '';




