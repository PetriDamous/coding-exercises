// arrange
const array = [1, 2, 1];
const elemToReplace = 1;
const substitutionElem = 3;

// Solution 1
function arrayReplace(array, elemToReplace, substitutionElem) {
  //  write code here.
  return array.map((elm) => {
    if (elm === elemToReplace) {
      return (elm = substitutionElem);
    }

    return elm;
  });
}

arrayReplace(array, elemToReplace, substitutionElem);

// Solution 2
function arrayReplace(array, elemToReplace, substitutionElem) {
  //  write code here.
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemToReplace) {
      array[i] = substitutionElem;
    }
  }

  return array;
}

arrayReplace(array, elemToReplace, substitutionElem);

// Solution 3
function arrayReplace(array, elemToReplace, substitutionElem) {
  //  write code here.
  return array.reduce((acc, current) => {
    if (current === elemToReplace) {
      acc.push(substitutionElem);

      return acc;
    }

    acc.push(current);

    return acc;
  }, []);
}

arrayReplace(array, elemToReplace, substitutionElem);
