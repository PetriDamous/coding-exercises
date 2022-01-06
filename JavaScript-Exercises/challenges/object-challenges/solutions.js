/**
 *
 * Challenge 1
 *
 */
const petsArray = [
  ["dog", "Fido"],
  ["cat", "Whiskers"],
  ["pig", "Wilbur"],
];

// Solution 1
const transToObj = (array) => {
  return array.map((subArray) => {
    const emptyObj = {};

    emptyObj[subArray[0]] = subArray[1];

    return emptyObj;
  });
};

console.log(transToObj(petsArray));

// Solution 2
const transToObj = (array) => {
  return array.reduce((acc, prev) => {
    acc[prev[0]] = prev[1];

    return acc;
  }, {});
};

console.log(transToObj(petsArray));

// Solution 3
const transToObj = (array) => {
  array.forEach((elm, i) => {
    const newObj = {};

    newObj[elm[0]] = elm[1];

    array[i] = newObj;
  });

  return array;
};

console.log(transToObj(petsArray));

// Solution 4
const transToObj = (array) => {
  for (let i = 0; i < array.length; i++) {
    const newObj = {};

    newObj[array[i][0]] = array[i][1];

    array[i] = newObj;
  }

  return array;
};

console.log(transToObj(petsArray));

/**
 *
 * Challenge 2
 *
 */

const dataArray = [
  ["Name", "State", "Candidate", "Amount"],
  ["John Doe", "IA", "Rep. Smithers", "$300"],
  ["Mary Smith", "CA", "Sen. Nando", "$1,000"],
  ["Sue Johnson", "TX", "Rep. Nguyen", "$200"],
];

// Solution 1
const transToArrayObj = (array) => {
  const categoryArray = array.shift();

  for (let i = 0; i < array.length; i++) {
    const tempObj = {};
    for (let j = 0; j < categoryArray.length; j++) {
      tempObj[categoryArray[j]] = array[i][j];
    }
    array[i] = tempObj;
  }

  return array;
};

console.log(transToArrayObj(dataArray));

// Solution 2
const transToArrayObj = (array) => {
  const categoryArray = array.shift();

  return array.reduce((acc, curr) => {
    const tempObj = {};

    curr.forEach((currElm, i) => {
      tempObj[categoryArray[i]] = currElm;
    });

    acc.push(tempObj);

    return acc;
  }, []);
};

console.log(transToArrayObj(dataArray));

// Solution 3
const transToArrayObj = (array) => {
  const categoryArray = array.shift();

  return array.map((arrayElm) => {
    const tempObj = {};
    let i = 0;

    return arrayElm.map((elm) => {
      tempObj[categoryArray[i]] = elm;
      i++;

      return tempObj;
    });
  })[0];
};

console.log(transToArrayObj(dataArray));

/**
 *
 * Challenge 3
 *
 */

// Solution 1
const letterCount = (str) => {
  const countObj = {};

  for (let i = 0; i < str.length; i++) {
    const isLetter = Object.keys(countObj).some((key) => key === str[i]);

    if (isLetter) {
      countObj[str[i]] += 1;
    } else {
      countObj[str[i]] = 1;
    }
  }

  return countObj;
};

console.log(letterCount("bbafff"));

// Solution 2
const letterCount = (str) => {
  const countObj = {};

  for (let i = 0; i < str.length; i++) {
    if (countObj[str[i]]) {
      countObj[str[i]] += 1;
    } else {
      countObj[str[i]] = 1;
    }
  }

  return countObj;
};

console.log(letterCount("bbafff"));

// Solution 3
const letterCount = (str) => {
  const strArray = str.split("");

  return strArray.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
      return acc;
    } else {
      acc[curr] = 1;
      return acc;
    }
  }, {});
};

console.log(letterCount("bbafff"));
