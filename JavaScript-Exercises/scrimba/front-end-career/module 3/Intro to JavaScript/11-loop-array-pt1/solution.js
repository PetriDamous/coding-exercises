// Assignment - Loops and Arrays Practice

//#1
//Loop through the following array and count how many "computer" there are. Log the final count:

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp","stapler", "computer",  "computer"];

// Solution 1
let count = 0;

for (item of officeItems) {
  if (item === "computer") count++
}

console.log(count);

// Solution 2
for (let i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") count++
}
  
console.log(count);

// Solution 3
officeItems.forEach((item) => {
    if (item === 'computer') count++
});
  
console.log(count);

