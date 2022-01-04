// What is the last value aleerted by this code? Why?

let i = 3;

while(i) {
    alert(i--);
}

// 1 because when i becomes 0 the loop stops

/*

The answer: 1.

 let i = 3;

while (i) {
  alert( i-- );
}
Every loop iteration decreases i by 1. The check while(i) stops the loop when i = 0.

Hence, the steps of the loop form the following sequence (“loop unrolled”):

let i = 3;

alert(i--); // shows 3, decreases i to 2

alert(i--) // shows 2, decreases i to 1

alert(i--) // shows 1, decreases i to 0

// done, while(i) check stops the loop

*/

// For every loop iteration, write down which value it outputs and then compare it with the solution.
// Both loops alert the same values,or not?

// 1. The prefix form ++i

let i = 0;

while (++i < 5) alert(i);

// 2. The postfix form i++

let i = 0;

while (++i < 5) alert(i);

/*
My answer:

1. outputs: 1 -> 2 -> 3 -> 4 stops

2. outputs: 1 -> 2 -> 3 -> 4 -> 5 stops

JavaScript.info answer:

The task demonstrates how postfix/prefix forms can lead to different results when used in comparisons.

From 1 to 4

 let i = 0;
while (++i < 5) alert( i );
The first value is i = 1, because ++i first increments i and then returns the new value. So the first comparison is 1 < 5 and the alert shows 1.

Then follow 2, 3, 4… – the values show up one after another. The comparison always uses the incremented value, because ++ is before the variable.

Finally, i = 4 is incremented to 5, the comparison while(5 < 5) fails, and the loop stops. So 5 is not shown.

From 1 to 5

 let i = 0;
while (i++ < 5) alert( i );
The first value is again i = 1. The postfix form of i++ increments i and then returns the old value, so the comparison i++ < 5 will use i = 0 (contrary to ++i < 5).

But the alert call is separate. It’s another statement which executes after the increment and the comparison. So it gets the current i = 1.

Then follow 2, 3, 4…

Let’s stop on i = 4. The prefix form ++i would increment it and use 5 in the comparison. But here we have the postfix form i++. So it increments i to 5, but returns the old value. Hence the comparison is actually while(4 < 5) – true, and the control goes on to alert.

The value i = 5 is the last one, because on the next step while(5 < 5) is false.

*/


// For each loop write down which values it is going to show. Then compare with the answer.

// Both loops alert same values or not?

// 1. The postfix form:

for (let i = 0; i < 5; i++) alert(i);

// 2. The prefix form:

for (let i = 0; i < 5; ++i) alert(i);

/*

My answer:

1. 0 -> 1 -> 2 -> 3 -> 4

2. 0 -> 1 -> 2 -> 3 -> 4

Both loops are the same value because the return value of i++ and ++i is not used in the comparison like it was
when using the while loop in the problem above.

JavaScript.info answer:


The answer: from 0 to 4 in both cases.

 for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );
That can be easily deducted from the algorithm of for:

Execute once i = 0 before everything (begin).
Check the condition i < 5
If true – execute the loop body alert(i), and then i++
The increment i++ is separated from the condition check (2). That’s just another statement.

The value returned by the increment is not used here, so there’s no difference between i++ and ++i.


*/

// Use the for loop to output even numbers from 2 to 10

// My answer

for (let i = 2; i < 11; i++) {
  if(i % 2 != 0) continue;
  alert(i);
}

// JavaScript.info answer

for (let i = 2; i <= 10; i++) {
  if(i % 2 === 0) {
    alert(i);
  }  
}



// Rewrite the code chaging the for loop to while without altering its behavior (the output should be the same)

for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}

// while version:
let i = 0;

while (i <= 3) {
  alert(`number ${i}!`);
  i++
}

// Answer above same as JavaScript.info


/*

Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

*/


let userInput = prompt("Please enter a number greater than 100", "0");

do {
  userInput = prompt("Please enter a number greater than 100", "0");

} while (userInput < 100);



let userInput = prompt("Please enter a number greater than 100", "0");

while(userInput < 100) {
  userInput = prompt("Please enter a number greater than 100", "0");  
}


/*

JavaScript.info:

let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
The loop do..while repeats while both checks are truthy:

1. The check for num <= 100 – that is, the entered value is still not greater than 100.
2. The check && num is false when num is null or a empty string. Then the while loop stops too.
P.S. If num is null then num <= 100 is true, so without the 2nd check the loop wouldn’t stop if the user clicks CANCEL. Both checks are required.

*/

/*

Instructions

*/

var a = 2 + 2;

switch (a) {
  case 60:
    console.log("correct");
    break;
  case 5:
  case 6:
    alert('wrong');
    alert('still wrong');
  break
}

/*

An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

Write the code which outputs prime numbers in the interval from 2 to n.

For n = 10 the result will be 2,3,5,7.

P.S. The code should work for any n, not be hard-tuned for any fixed value.

*/