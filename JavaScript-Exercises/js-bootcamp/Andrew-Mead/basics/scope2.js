/*

// Variable Shadowing

// Global (name)
    // Local (name)
        // Local (name)
    // Local (name)

let name = 'Chris';

if (true) {
    let name = 'Jill'; // varibale shadowing

    if (true) {
         console.log(name); // Will print out Jill (looks at parent variable)
    }
}

if (true) {
     console.log(name); // Will print out Chris (looks at parent variable which is the global)
}
*/


/*
// Re Assigning value in Scope

// Global (name)
    // Local (name)
        // Local 
    // Local (name)

let name = 'Chris';

if (true) {
    let name = 'Jill'; // varibale shadowing

    if (true) {
        name = 'Barry'
        console.log(name); // Prints out Barry. 
                            // first it looks for the first time a varible is declared which is in the parent scope
                            // Then the variable change is applied and Barry is printed out
    }
}

if (true) {
    console.log(name); // Chris
}
*/


// Global Leak

// Global 
    // Local 
        // Local 
    // Local     

if (true) {
    name = 'Jill'; // Varibale is not defined so the
                    // Local scope will go up the heiarchy until it reaches the root
                    // If there isn't a variable at the root scope then a gobal variable is decalred and used
                    // This is known as a Gobal leak
    if (true) {
         console.log(name); // Will print out Jill
    }
}

if (true) {
     console.log(name); // Will print out Jill
}

