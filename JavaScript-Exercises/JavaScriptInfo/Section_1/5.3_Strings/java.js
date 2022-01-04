// Q1

/*

Q1

*/

// My solution:


function ucFirst(str) {
    return str = str[0].toUpperCase() + str.slice(1);
     
 }
 
 console.log(ucFirst('chris'));

 //Note: My solution doesn't have anything to check for empty string
 // Above code will throw an error if empty string is used for argument
 // See JavaScript.info answer for better solution

 /*

 JavaScript.info:

 */

 // Q2


 /*

 Q2:

 */

 // My solution

function checkSpam(str) {
    str = str.toLowerCase();

    return str.includes('viagra') || str.includes('xxx');     
}

console.log(checkSpam('buy ViagRA now'));

console.log(checkSpam('free xxxxxxxx'));

console.log(checkSpam('innocent rabbit'));

 /*

 JavaScript.info:

 */


 // Q3

 /*

 Q3

 */

 // My solution:

 function truncate(str, maxlength) {
    if (str.length < maxlength) return str;
    return str.slice(0, maxlength - 1) + "...";
}

console.log(truncate("What I'd like to tell on this topic is:", 20));

console.log(truncate("Hi everyone!", 20));

/*

JavaScript.info:

*/


// Q4:

/*

*/

// My solution:

function extractCurrencyValue(str) {
    return str = +str.slice(1);
}

console.log(extractCurrencyValue('$120'));

/*

JavaScript.info:

*/