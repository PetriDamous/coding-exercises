/*
    **** Challenge ****
    
    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.
    
    Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.
    
    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it. 

*/

const shoppingList = ["eggs", "milk", "butter"];

// My solution:
const basket = [...shoppingList, 'beer', 'chicken', 'salmon'];

console.log(shoppingList);

console.log(basket);

// Telmo solution:
const shoppingBasket = [ ...shoppingList, "bread", "pasta"];

console.log(shoppingBasket);