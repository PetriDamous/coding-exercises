// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem

// arrange
const array = [1, 2, 1];
const elemToReplace = 1;
const substitutionElem = 3;

// act
const result = arrayReplace(array, elemToReplace, substitutionElem);

// assert
expect(result).toEqual([3, 2, 3]);
