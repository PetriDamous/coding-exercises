/////////////// nested arrays //////////////////

// Nested arrays are really good for modeling data
// after boards. 

// For example you might use a nested array to model
// data for a tic-tac-toe game

// Example:

const ticTacToe = [
    ['X', null, 'O'],
    ['O', 'X', null],
    [null, null, 'O']
  ];
  
  // Note: 'X' represents X, null empty space, 'O' represesnts O
  
  //////////// Accessing item in nested array ///////////////////
  
  const rePro = [
    ['Jill', 'Chris'],
    ['Leon', 'Claire'],
    ['Carlos', 'Jill']
  ];
  
  console.log(rePro[0][1]); // Chris
  
  console.log(rePro[2][0]); // Carlos
  
  rePro[0][1] = 'Barry';
  
  console.log(rePro); 
  
  // [ [ 'Jill', 'Barry' ],
  //   [ 'Leon', 'Claire' ],
  //   [ 'Carlos', 'Jill' ] ]