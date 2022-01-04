const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

// One approach to find max using reduce:
const maxGrade = grades.reduce((max, currVal) => {
  if (currVal > max) return currVal;
  return max;
});

// A shorter version using Math.max:
const maxGrade = grades.reduce((max, currVal) => {
  return Math.max(max, currVal)
});

// Finding the min value using Math.min: 
const minGrade = grades.reduce((min, currVal) => (
  //using implicit return for variety's sake
  Math.min(min, currVal)
));

// max     currVal    return
// 87        64         87
// 87        96         96
// 96        92         96
/// etc.

// Math.max takes two arguments
// 1st argument is a number
// 2nd argument is a number
// Both numbers numbers are compared and 
// the larger number is returned
// Basically compares to see which number is larger

// Math.min works the same way as Math.max
// but returns the smaller number instead

// We can specify an initial value as the 2nd argument to reduce:
// arr.reduce(reducerFunction, initialValue)
const total = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
  return sum + currVal;
}, 1000) //sum starts at 1000, then each element is added to it