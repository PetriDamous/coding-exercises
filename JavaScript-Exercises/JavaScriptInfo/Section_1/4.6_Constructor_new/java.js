/*

Q1:

Is it possible to create functions A and B such as new A()==new B()?

function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
If it is, then provide an example of their code.

*/

/*

My answer:

I said no at first but if we have the funcitons return the same object reference then yes it is possiable.

Code below explains.


JavaScript.info:

Yes, it’s possible.

If a function returns an object then new returns it instead of this.

So they can, for instance, return the same externally defined object obj:

 let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true

*/




/*

Q2:

Create a constructor function Calculator that creates objects with 3 methods:

read() asks for two values using prompt and remembers them in object properties.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
For instance:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

*/

// My solution:

function Calculator() {  
    
    this.read = function() {
        this.num1 = Number(prompt("enter number", "0"));
        this.num2 = Number(prompt("enter number", "0"));
        
    }

    this.sum = function() {
        return this.num1 + this.num2;
    }

    this.mul = function() {
        return this.num1 * this.num2;
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

/*

JavaScript.info:

function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

*/





/*

Q3:

Create a constructor function Accumulator(startingValue).

Object that it creates should:

Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value.
In other words, the value property is the sum of all user-entered values with the initial value startingValue.

Here’s the demo of the code:

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values

*/

// My Solution:

function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += Number(prompt("enter value", "0"));
    }
  }
  
  let accumulator = new Accumulator(1); // initial value 1
  
  accumulator.read(); // adds the user-entered value
  accumulator.read(); // adds the user-entered value
  
  alert(accumulator.value); // shows the sum of these values

/*

JavaScript.info:

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('How much to add?', 0);
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);


*/
