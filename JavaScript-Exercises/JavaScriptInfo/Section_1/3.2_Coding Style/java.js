/*

What’s wrong with the code style below?

function pow(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else
{
  alert(pow(x,n))
}


*/

// My answer:

function pow(x,n) // No space in between function parameters
{ // Bracket should not be on seprate line
  let result=1;   // No space between = // Also needs a space between result and for loop
  for(let i=0;i<n;i++) {result*=x;} // No spaces between =, no space between <, no spaces between ; // Block should be on different line and there are no spaces for *=
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'') // Need space between function arguments and variable equal // variables should be decalred on other line for easy read ability
if (n<=0) // Space between <= and if block bracket shouldn't be on other line
{
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`); // Function argument should be split into two lines since its long
}
else // Block bracket should be on this line
{
  alert(pow(x,n)) // Missing ; and no space between alert () and pow function and no space for pow arguments
}



// My fixed solution:

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
	result *= x;
  }

  return result;
}

let x = prompt("x?", ''); 
let n = prompt("n?", '');

if (n <= 0) {
  alert(`Power ${n} is not supported, 
	please enter an integer number greater than zero`);
} else {
  alert( pow(x, n) );
}


/*

JavaScript.info:

You could note the following:

function pow(x,n)  // <- no space between arguments
{  // <- figure bracket on a separate line
  let result=1;   // <- no spaces before or after =
  for(let i=0;i<n;i++) {result*=x;}   // <- no spaces
  // the contents of { ... } should be on a new line
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'') // <-- technically possible,
// but better make it 2 lines, also there's no spaces and missing ;
if (n<0)  // <- no spaces inside (n < 0), and should be extra line above it
{   // <- figure bracket on a separate line
  // below - long lines can be split into multiple lines for improved readability
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else // <- could write it on a single line like "} else {"
{
  alert(pow(x,n))  // no spaces and missing ;
}
The fixed variant:

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 0) {
  alert(`Power ${n} is not supported,
    please enter an integer number greater than zero`);
} else {
  alert( pow(x, n) );
}


*/