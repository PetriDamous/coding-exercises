/*

reduce() is an array method that will allow us to do operations to each element of an array and return one value

For example if we wanted to add all the elements together for the array example below we can use reduce to add everything
in the array together and return a single value

*/

const array = [1,2,3,4,5];

/*

reduce() takes two arguments
1st argument is a function where we will perform our operations
2nd argument is the value from what the accumulator will start at

The fuction in the first argument takes two arguments
1st argument is the accumulator
The accumulator is the value accumulated over the course of iteration and performing our operation on each element

2nd argument is the current element that the iteration is on.

*/

const allAdd = array.reduce((accumulator, currentElement) => accumulator + currentElement, 0);

/*

How it works:

Our second argument for reduce is 0 so the accumulator will have a value of 0.

Our currentElement for the 1st iteration will be 1.

0 + 1 = 1 so the accumulator will now have a value of 1 for the next iteration

Pattern goes something like this

1st iteration:

accumulator = 0
currentElement = 1

accumulator = 0 + 1

2nd iteration:

accumulator = 1
currentElement = 2

accumulator = 1 + 2

3rd iteration:

accumulator = 3
currentElement = 3

accumulator = 3 + 3

4th iteration: 

accumulator = 6
currentElement = 4

accumulator = 6 + 4

5th iteration:

accumulator = 10
currentElement = 5

accumulator = 10 + 5

15 is the final value

*/

console.log(allAdd); // 15

console.log('\n');

/*

The example below works the same way as the example above.

The only difference is that the accumulator will start at 10 instead of 0 because that is the value of our second argument for reduce()

*/

const allAdd10 = array.reduce((accumulator, currentElement) => accumulator + currentElement, 10);

console.log(allAdd10); // 25