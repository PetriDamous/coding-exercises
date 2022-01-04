/*

Q1:

Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.

*/

let user = {};

user.name = "John";

user.sername = "Smith";

user.name = "Pete";

delete user.name;

/*

JavaScript.info:

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

*/


/*

Q2:

Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

*/

// My solution:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
    for (let key in obj) {
    
      return false;
    }

    return true;
}

/*

JavaScript.info:

Just loop over the object and return false immediately if there’s at least one property.

function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

*/




/*

Q3:

Is it possible to change an object declared with const? What do you think?

const user = {
  name: "John"
};

// does it work?
user.name = "Pete";

*/

/*

My answer:

Yes it works because the constant is only storing a refernce to the object.

Changing the object itself will not effect the constant because we are not changing
the constant value itself just the object reference

JavaScript.info:

Sure, it works, no problem.

The const only protects the variable itself from changing.

In other words, user stores a reference to the object. And it can’t be changed. But the content of the object can.

const user = {
  name: "John"
};

// works
user.name = "Pete";

// error
user = 123;

*/

/*

Q4:

We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.

*/

// My solution

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  
  let sum = 0;
  
  for (let key in salaries) {
     sum += salaries[key];
  }
  
  console.log(sum);

  /*

  JavaScript.info:

  let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum); // 390

  */


/*

Q5:

Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here.

*/

// My solution

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "number") {
        obj[key] *= 2;
      } 
    }
  }
  
  multiplyNumeric(menu);
  
  console.log(menu);

  /*

  JavaScript.info:

  function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

*/
