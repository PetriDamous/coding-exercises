
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  

//ES5 Solution
var num1 = prompt('Enter a number');
var num2 = prompt('Enter another number');
var SUM = Number(num1) + Number(num2);

alert(SUM);

//ES6 Solution
let num1 = prompt('Enter a number');
let num2 = prompt('Enter another number');
const SUM = Number(num1) + Number(num2);

alert(SUM);

//Solution with function ES5
function calculate(){
    var num1 = prompt('Enter a number');
    var num2 = prompt('Enter another number');
    
    function inputCheck(){
        if(isNaN(num1) || isNaN(num2)){
            alert('Please use only numbers');
        }
        else{
            add(num1, num2);
        }
    }

    function add(num1, num2){
        var SUM = Number(num1) + Number(num2);
        alert(SUM);
    }

    inputCheck();
}

calculate();

//Solution with function ES6
const calculate = () => {
    let num1 = prompt('Enter a number');
    let num2 = prompt('Enter another number');

    const inputCheck = (num1, num2) => {
        if(isNaN(num1) || isNaN(num2)){
            alert('Please enter a number');
        }
        else{
            add(num1, num2);            
        }
    }

    const add = (num1, num2) => {
        const SUM = Number(num1) + Number(num2);
        alert(SUM);
    }

    inputCheck(num1, num2);
}

calculate();

// BONUS: Make a program that can subtract, multiply, and also divide!

//ES5 Solution
function calculate(){
    var num1 = prompt('Enter a number');
    var num2 = prompt('Enter another number');
    var op = prompt('Pick your operatoin: add, subtract, multiply, or divide').toLowerCase();
    var ans = 0;

    function numCheck(num1, num2){
        if(isNaN(num1) || isNaN(num2)){
            alert('Invalid Input');
        }
        else{
            opCheck(op);
        }
    }

    function opCheck(op){
        switch(op){
            case 'add':
                add(num1, num2);
                break;
            case 'subtract':
                sub(num1, num2);
                break
            case 'multiply':
                multi(num1, num2);
                break
            case 'divide':
                div(num1, num2);
                break
            default:
                alert('Invalid Input');
        }
    }

    function add(num1, num2){
        ans = Number(num1) + Number(num2)
        alert(ans);
    }

    function sub(num1, num2){
        ans = Number(num1) - Number(num2)
        alert(ans);
    }

    function multi(num1, num2){
        ans = Number(num1) * Number(num2)
        alert(ans);
    }

    function div(num1, num2){
        ans = Number(num1) / Number(num2)
        alert(ans);
    } 

    numCheck(num1, num2);
}

calculate();

//ES6 Solution

const calculate = () => {

    let num1 = prompt('Enter a number');
    let op = prompt('Pick your operatoin: add, subtract, multiply, or divide').toLowerCase();
    let num2 = prompt('Enter a second number');

    const add = (num1, num2) => {
        alert(num1 + num2);
    }

    const subtract = (num1, num2) => {
        alert(num1 - num2);
    }

    const multiply = (num1, num2) => {
        alert(num1 * num2);
    }

    const divide = (num1, num2) => {
        alert(num1 / num2);
    }

    const checkOp = (op, num1, num2) => {
        switch(op){
            case 'add':
                add(num1, num2);
                break;
            case 'subtract':
                subtract(num1, num2);
                break;
            case 'multiply':
                multiply(num1, num2);
                break;
            case 'divide':
                divide(num1, num2);
                break;
            default:
                alert('Please enter a valid operation');                    
        }
    }

    const numConvert = (op, num1, num2) => {
        num1 = Number(num1);
        num2 = Number(num2);
        checkOp(op, num1, num2);
    }

    const numCheck = (num1, num2, op) => {
        if(isNaN(num1) || isNaN(num2)){ alert('Please enter a valid number'); }
        else{ numConvert(op, num1, num2); }
    }

    numCheck(num1, num2, op);
}

calculate();