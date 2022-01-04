// What is lexical scope?

// A lexical scope in JavaScript means that a variable defined 
// outside a function can be accessible inside another 
// function defined after the variable declaration. 
// But the opposite is not true; the variables defined 
// inside a function will not be accessible outside that function.

function outer() {
    let movie = 'Amadeus';
  
    function inner() {
      // let movie = "The Shining";
  
      function extraInner() {
        //movie is not defined in this function
        //but it has access to parent function's variables
        console.log(movie.toUpperCase())
      }
      extraInner();
    }
    inner();
  }
  
  outer();


  // How lexical scope works:

  // 1. extraInner function will first look within its own
  // scope to see if it has a variable called movie.

  // 2. If extraInner cannot find a variable called movie it
  // will look at it's parent function, inner, to see if it has
  // that variable.

  // 3. If extraInner cannot find the movie variable inside of inner function 
  // it will then look at the outer function.

  // 4. If the movie variable is not declared inside of the inner function we
  // get the error undefined.

  