// Global scope (convertFahrenheitToCelsius, convert1, convert2)
    // Local scope (fahrenheit (function argument in function expresion), )
        // Local scope (isFreezing (has access to all above scopes))
let convertFahrenheitToCelsius = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;

    if (celsius <= 0) {
        let isFreezing = true;
    }

    return celsius; 
}

let convert1 = convertFahrenheitToCelsius(32);

let convert2 = convertFahrenheitToCelsius(68);

console.log(convert1);

console.log(convert2);