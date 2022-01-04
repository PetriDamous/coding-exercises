// Challenge

// Are both vegan? Only offer vegan dishes
// At least one vegan? Make sure to offer non and vegan food
// Both not vegan offer anything on the menu

let isGuestOneVegan = false;
let isGuestTwoVegan =  false;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("Give vegan menu only");
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("Give them non vegan and vegan menu");
} else {
    console.log("Give them anything on the menu");
}