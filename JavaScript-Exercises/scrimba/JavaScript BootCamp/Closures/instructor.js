// Solution 1

function countdown(startingNumber, step) {
    let countFromNum = 11;
    return function decrease() {
      countFromNum -= 1;
      return countFromNum;
    }
  }
  
  const countingDown = countdown();
  
  console.log(countingDown());
  console.log(countingDown());
  console.log(countingDown());

// Solution 2

function countdown(startingNumber, step) {
    let countFromNum = startingNumber + step;
    return function decrease() {
      countFromNum -= step;
      return countFromNum;
    }
  }
  
  const countingDown = countdown(20, 5);
  
  console.log(countingDown());
  console.log(countingDown());
  console.log(countingDown());