//Assignment - Even/Odd Looping
// Create a for loop that iterates through 101 numbers (from 0 - 100). 
// If the current iteration is an Odd number, print "Odd" to the console, otherwise print "Even".

for (let i = 0; i <= 100; i++) {
    i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`);
  }