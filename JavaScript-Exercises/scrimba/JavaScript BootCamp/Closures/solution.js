// Solution 1

function countdown() {
    // write your code here
    let num = 11;
    return function () {
      return num -= 1;
    }
}
  
const countingDown = countdown();

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());

// Solution 2

// Start
function countdown(num, step) {
    // write your code here    
    return function () {
      return num -= step;
    }
}
  
const countingDown = countdown(21, 5);

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());