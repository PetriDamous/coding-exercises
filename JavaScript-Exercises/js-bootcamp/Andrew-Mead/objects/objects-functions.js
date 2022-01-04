let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

console.log(getSummary(myBook).summary);
console.log(getSummary(myBook).pageCountSummary);

console.log('\r');

console.log(getSummary(otherBook).summary);
console.log(getSummary(otherBook).pageCountSummary);

console.log('\r');

let myBookSum = getSummary(myBook);

console.log(myBookSum.summary);
console.log(myBookSum.pageCountSummary);

console.log('\r');

let otherBookSum = getSummary(otherBook);

console.log(otherBookSum.summary);
console.log(otherBookSum.pageCountSummary);

console.log('\n');
console.log('\r');

// Challenge area

// Crearte function - take fahrenheit in - return object with all three



function showTemp (f) {
    return {
        fahrenheit: f,
        celsius: (f - 32) * 5 / 9,
        kelvin: +((f + 459.67) * 5 / 9).toFixed(2)
    }
}

console.log(showTemp(32));


