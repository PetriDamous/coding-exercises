// Challenge
// Build tip calculator that returns message
// Message Example: A 25% tip on $40 would be $10

function calculateTip(total, tipPercent = .2) {
    return `A ${tipPercent * 100}% tip on $${total} would be $${(total * tipPercent).toFixed(2)}`;
    
}

console.log(calculateTip(8.75));

console.log(calculateTip(40, .25));