/*
    ** includes() Challenge
        * You want to make a chocolate cake
        * And you have a list of ingredients represented with an array
        * Using the JavaScript includes() function
        * Check if you have the ingredient chocolate in your list of ingredients, and print into the console "We are going to make a chocolate cake" if you have it
        * Else print into the console "We can't make a chocolate cake because we are missing the ingredient chocolate"
*/

// My solution
const listIngredients =  [ "flour", "sugar", "eggs", "butter", "chocolate" ];

const ingredientChk = (ingredients) => {
  if (ingredients.includes('chocolate')) {
    return 'We are going to make a chocolate cake!!!'
  } 

  return `We can't make a chocolate cake because we are missing the ingredient chocolate`
}

console.log(ingredientChk(listIngredients));

// Telmo Solution
