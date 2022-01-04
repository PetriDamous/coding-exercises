// What is the code below going to output?

alert(null || 2 || undefined); // 2

// Answer is 2 the first truthy value



// What is the code below going to output?

alert(alert(1) || 2 || alert(3)); // alert(1) then 2

/*

The answer: first 1, then 2.

 alert( alert(1) || 2 || alert(3) );
The call to alert does not return a value. Or, in other words, it returns undefined.

The first OR || evaluates it’s left operand alert(1). That shows the first message with 1.
The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.
There will be no 3, because the evaluation does not reach alert(3). 

*/

// What is the code below going to output?

alert(1 && null && 2); // null

// Answer is null because it is the first falsy statement


// What is the code below going to output?

alert(alert(1) && alert(2)); // 1 and then undefinded

/*

The answer: 1, and then undefined.

 alert( alert(1) && alert(2) );
The call to alert returns undefined (it just shows a message, so there’s no meaningful return).

Because of that, && evaluates the left operand (outputs 1), and immediately stops, because undefined is a falsy value. And && looks for a falsy value and returns it, so it’s done.

*/


// What is the code below going to output?

alert( null || 2 && 3 || 4 ); // 3

/*

The answer: 3.

 alert( null || 2 && 3 || 4 );
The precedence of AND && is higher than ||, so it executes first.

The result of 2 && 3 = 3, so the expression becomes:

null || 3 || 4
Now the result is the first truthy value: 3.

*/


// Write an “if” condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.

if(age >= 14 || age <= 90)


// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.

if(!(age >= 14 && age <= 90)) 
  
if(age < 14 || age > 90)

// Which of these alerts are going to be executed?
// What will the results of the expressions be inside if(...)

if (-1 || 0) alert('first'); // will run | -1 truthy
if (-1 && 0) alert('second'); // will not run | 0 falsy
if (null || -1 && 1) alert('third'); // will run | 1 truthy

/*

The answer: the first and the third will execute.

Details:

 // Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert( 'first' );

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert( 'second' );

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );

*/



/*

Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”

*/



const login = () => {
    let userName = prompt("Please enter user name");

    if(userName == "Admin") {
        password();
    } else if (userName == null || userName == "") {
        alert("Cancel");
    } else {
        alert("I don't know you");
    }
}

const password = () => {
    let password = prompt("Please enter password");

    if(password == "TheMaster") {
        alert("Welcome");
    } else if(password == null || password == "") {
        alert("Cancel");
    } else {
        alert("Wrong password");
    }
}

login();

/*

let userName = prompt("Who's there?", '');

if (userName == 'Admin') {

  let pass = prompt('Password?', '');

  if (pass == 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass == '' || pass == null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName == '' || userName == null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}
Note the vertical indents inside the if blocks. They are technically not required, but make the code more readable.

*/