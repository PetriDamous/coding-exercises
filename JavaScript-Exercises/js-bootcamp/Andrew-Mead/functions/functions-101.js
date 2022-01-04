// Challenge Area

// Create a function called convertFahrenheitToCelsius

// Call a couple times (32 -> 0) (68 -> 20)

// Print the converted values

let convertFahrenheitToCelsius = function(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

let convert1 = convertFahrenheitToCelsius(32);

let convert2 = convertFahrenheitToCelsius(68);

console.log(convert1);

console.log(convert2);