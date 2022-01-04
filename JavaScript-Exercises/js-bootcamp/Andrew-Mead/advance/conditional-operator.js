const team = ['Chris', 'Snake', 'Sonic', 'Mario', 'Yoshi', 'Tails'];

// We can store our results in a variable
const message =  team.length >= 4 ? `${team.length} is a good size team` : 'Team is to damn small';

console.log(message);

console.log('\r');

// We can also use the tenary/conditional operator to run functions

const age1 = 21;
const age2 = 18;

const showPage = () => `You are ${age1}. You may may enter the site`;

const showErrorPage = () => `You are ${age2}. You are to damn young`;

const ofAge = age1 >= 21 ? showPage() : showErrorPage();

const notAge = age2 >= 21 ? showPage() : showErrorPage();

console.log('ofAge: ', ofAge);

console.log('notAge: ', notAge);

console.log('\r');

/******* Challenge *************/

// 1. Print "Team size: 3" if less than equal to 4
// 2. Print "Too many people on your team" otherwise

const team1 = ['Chris', 'Barry'];

const size = team1.length <= 4 ? `Team size: ${team1.length}` : 'Too many people on your team';

console.log(size);