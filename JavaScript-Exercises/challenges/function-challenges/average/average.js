// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

const avg = (array) => {
    let sum = 0;
  
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    
    return sum / array.length;
}
  
console.log(avg([0,50]));
console.log(avg([75,76,80,95,100]));

// Reduce solution

const avg = (array) => {
    return array.reduce((acc, cur) => acc + cur) / array.length;
}
  
console.log(avg([0,50]));
console.log(avg([75,76,80,95,100]));