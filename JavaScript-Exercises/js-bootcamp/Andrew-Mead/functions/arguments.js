// Multiple arguments

let add = function(a, b, c) {
    return a + b + c;
}

let result = add(10, 1, 5);
console.log(result);

// Default arguments

function getScoreText(name = 'Unknown', score = 0) {
    return `Name: ${name} - Score: ${score}`;
}

console.log(getScoreText());

console.log(getScoreText('Chris Redfield', 9e19));

console.log(getScoreText(undefined, 8e10));

console.log('\n');

// Challenge area

// Create a tip calculator
// function areguments: total, tipPercent .2

function calculateTip(total, tipPercent = .2) {
    return (total * tipPercent).toFixed(2);
}

console.log(calculateTip(8.75));

console.log(calculateTip(8.75, .5));