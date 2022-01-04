// 1. Write function to that reverses string

// Solution 1 (easy street):

const reverseStr = (str) => {
    return str.split('').reverse().join('');
}
  
reverseStr('dick'); // 'kcid'
reverseStr('Chris Redfield') // 'dleifdeR sirhC'

// Solution 2:

const reverseStr = (str) => {
    let strArray = str.split('');
    let reverseArray = [];
  
    for (let i = strArray.length - 1; i >= 0; i--) {
      
      reverseArray.push(strArray[i])
    }
  
    return reverseArray.join('');
}

reverseStr('dick'); // 'kcid'
reverseStr('Chris Redfield') // 'dleifdeR sirhC'

//  Solution 3:

const reverseStr = (str) => {
    let newStr = '';
  
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
  
    return newStr;
}
  
reverseStr('dick'); // 'kcid'
reverseStr('Chris Redfield') // 'dleifdeR sirhC'

// More solutions:  

// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/


// 2. Write function that prints the average score of students
// and tells who has lowest grade

const myStudents = [
  {
      name: 'Chris',
      grade: 65
  },

  {
      name: 'Rebeeca',
      grade: 100
  },

  {
      name: 'Claire',
      grade: 85
  },

  {
      name: 'Leon',
      grade: 66
  }
];

const avg = (students) => {
let sum = 0;
students.forEach((student) => {
  sum += student.grade;
});

return sum / students.length;
}

avg(myStudents); // 79


// 3. Write function that takes array as argument
// and returns array of only even numbers

const evenOnly = (array) => {
  let evenArray = [];

  array.forEach((elm) => {
    if (elm % 2 === 0) evenArray.push(elm);
  });

  return evenArray;
}

evenOnly([1, 2, 3, 4]); // [ 2, 4 ]


// 4. Write a function that returns the average 
// of all numbers inside of gameboard

const gameBoard = [
	[ 4, 32, 8, 4 ],
	[ 64, 8, 32, 2 ],
	[ 8, 32, 16, 4 ],
	[ 2, 8, 4, 2 ]
];

const addBoard = (board) => {
  let sum = 0;
  let counter = 0;

  for (let i = 0; i < board.length; i++) {
    let row = board[i]
    
    for (let j = 0; j < row.length; j++) {
      sum += row[j];
      counter++
    }
  }

  return sum / counter;
}

addBoard(gameBoard); // 14.375