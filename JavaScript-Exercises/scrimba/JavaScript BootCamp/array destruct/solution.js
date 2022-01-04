// Challenge: 
// In our restaurant, the chef has some favourite dishes in two different categories.
// The chef loves all dishes that start with "S", while the rest are regular dishes
// Use array destructoring to create arrays of the chefs favourite dishes of meat and
// fish, and to create arrays of the regular meat and fish dishes

const fishDishes = ['Salmon Rillettes', 'Grilled Tuna Provencal', 'Fish and Chips']
const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers']

// Modify these four variables first

const [chefsFishDishes, ...regularFishDishes] = fishDishes;

const [regularMeatDishes, ...chefsMeatDishes] = meatDishes;

console.log(chefsFishDishes)
console.log(regularFishDishes)
console.log(regularMeatDishes)
console.log(chefsMeatDishes)

// Finally, use the spread operator to create these two arrays as well
let chefsDishes = [chefsFishDishes, ...chefsMeatDishes];
let regularDishes = [regularMeatDishes, ...regularFishDishes];

console.log('\n');

console.log(chefsDishes);

console.log(regularDishes)