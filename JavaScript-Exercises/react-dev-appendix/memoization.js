/*

Memoization is a caching method used to ensure that a method or function doesn't run the same inputs more than once
by keeping a record of the results for the given inputs (usually in a hash map)

*/

// Example without memoization

function addTo80(n) {
    console.log('long calculation');
    return n + 80;
}

console.log(addTo80(5));
console.log(addTo80(5));
console.log(addTo80(5));
console.log(addTo80(5));

/*

In above code console.log('long calculation') represnts a long calculation that we must run before we perform our final
calculation of n + 80.

Everytime we run this function we must perform this long calculation before we get our return value.

Of course this is not very good a performance and that is when memoization comes in.

*/

console.log('\n');

// Example with memoization

// We are using an object to store our values once a new calculation is complete
// This will become a hash table of sorts and will serve as our cache
// for retrieving values of past calculations
let cache = {}

function memoAddTo80(n) {
    // in checks to see if a property is in an object
    if (n in cache) {
        /*
        
        Here we are using bracket notation to access an objects proerty

        Bracket notation is the same as dot notation execpt you can perform JavaScript expressions
        using bracket notation.

        We used this when we needed to make the slide count dynamic in a Captivate project
        
        */
        
        return cache[n];
    } else {
        console.log('long calculation');
        cache[n] = n + 80;
        return cache[n];
    }
}

// Since this is the first time we ran our calculation we had to do the long process first before we get our return value
console.log('1', memoAddTo80(5)); // long calculation 85

// Now that our value is stored in our cache we can get our return value from the cache
// which is much faster than having to perform our long calculation over again
console.log('2', memoAddTo80(5)); // 85

console.log('3', memoAddTo80(6)); // long calculation 86
console.log('4', memoAddTo80(7)); // long calculation 87
console.log('5', memoAddTo80(6)); // 86