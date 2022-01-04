/*

Q1:

Create a script that prompts the visitor to enter two numbers and then shows their sum.

Check demo for requriments.

*/

// My Solution 1:

let num1 = prompt("Enter a number");

let num2 = prompt("Enter another number");

if (Object.is(parseFloat(num1), NaN)  || Object.is(parseFloat(num2), NaN)) {
  alert(NaN);
} else {
  alert(Number(num1) + Number(num2));

// Note: My solution will alert NaN if null is a value

/*

JavaScript.info:

let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );

Note the unary plus + before prompt. It immediately converts the value to a number.

Otherwise, a and b would be string their sum would be their concatenation, that is: "1" + "2" = "12".


*/





/*

Q2:

According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.

For instance:

 alert( 1.35.toFixed(1) ); // 1.4
In the similar example below, why is 6.35 rounded to 6.3, not 6.4?

 alert( 6.35.toFixed(1) ); // 6.3
How to round 6.35 the right way?

*/




/*

Q3:

Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

The resulting value must be returned as a number.

The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.

*/

//My solution:

function readNumber() {
  let num;

  do {
    num = prompt("Please enter a number", "0");
    console.log(`top: ${num}`);
    if (num === null || num.length === 0) {
      return alert(`Read: null`);
    }
  
    if ( parseFloat(num) || +num === 0 ) {
      return alert(`Read: ${num}`);
    }
  
    
    console.log(`bottom: ${num}`);
  } while (isNaN(num));  
}

readNumber();

// My solution doe not cover empty strings with big gaps like "   ".
// Use isFinite to check for numbers to cover this case

/*

JavaScript.info:

function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Read: ${readNumber()}`);
The solution is a little bit more intricate that it could be because we need to handle null/empty lines.

So we actually accept the input until it is a “regular number”. Both null (cancel) and empty line also fit that condition, because in numeric form they are 0.

After we stopped, we need to treat null and empty line specially (return null), because converting them to a number would return 0.

*/


/*

Q4:

This loop is infinite. It never ends. Why?

let i = 0;
while (i != 10) {
  i += 0.2;
}

*/

/*

Q5:

The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

Examples of its work:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525

*/

// My solution:

function random(min, max) {
  return Math.random() * (max - min) + min;
}

random(1, 5);

/*

JavaScript.info:

We need to “map” all values from the interval 0…1 into values from min to max.

That can be done in two stages:

If we multiply a random number from 0…1 by max-min, then the interval of possible values increases 0..1 to 0..max-min.
Now if we add min, the possible interval becomes from min to max.
The function:

 function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

*/



/*

Q6:

Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

Any number from the interval min..max must appear with the same probability.

Examples of its work:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
You can use the solution of the previous task as the base.

*/

// My solution

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

random(1, 5);

/*

JavaScript.info:

The simple but wrong solution
The simplest, but wrong solution would be to generate a value from min to max and round it:

 function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

alert( randomInteger(1, 3) );
The function works, but it is incorrect. The probability to get edge values min and max is two times less than any other.

If you run the example above many times, you would easily see that 2 appears the most often.

That happens because Math.round() gets random numbers from the interval 1..3 and rounds them as follows:

values from 1    ... to 1.4999999999  become 1
values from 1.5  ... to 2.4999999999  become 2
values from 2.5  ... to 2.9999999999  become 3
Now we can clearly see that 1 gets twice less values than 2. And the same with 3.

The correct solution
There are many correct solutions to the task. One of them is to adjust interval borders. To ensure the same intervals, we can generate values from 0.5 to 3.5, thus adding the required probabilities to the edges:

 




function randomInteger(min, max) {
  // now rand is from  (min-0.5) to (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

alert( randomInteger(1, 3) );
An alternative way could be to use Math.floor for a random number from min to max+1:

 




function randomInteger(min, max) {
  // here rand is from min to (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert( randomInteger(1, 3) );
Now all intervals are mapped this way:

values from 1  ... to 1.9999999999  become 1
values from 2  ... to 2.9999999999  become 2
values from 3  ... to 3.9999999999  become 3
All intervals have the same length, making the final distribution uniform.

*/