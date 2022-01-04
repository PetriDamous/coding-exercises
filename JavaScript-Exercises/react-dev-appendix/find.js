// .find() is a array method used to find an element in the array
// once the condition of the search is met the find method stops searching and returns the first value that meets the condition

// .find() takes an argument which is the array element 

const numArray = [1,2,3,4,5,6,7,8,9];

const findFive = numArray.find(elm => elm === 5);

// Finds the first element that meets the condition of the call back function
console.log(findFive); // 5

const firstUnderFive = numArray.find(elm => elm < 5);

// Finds the first element that meets the condition of the call back function
console.log(firstUnderFive); // 1

console.log('\n');

// We have used the find method in other projects to find objects
// Example using objects:

const userID = [
    {
        id: 1,
        name: 'Chris Redfield',
    
    },

    {
        id: 2,
        name: 'Jill Valentine',
    
    },

    {
        id: 3,
        name: 'Barry Burton',
    
    }
]

// finds the object that contains the id: 3
const user = userID.find(elm => elm.id === 3); // {id: 3, name: 'Barry Burton'}

console.log(user.name); // Barry Burton