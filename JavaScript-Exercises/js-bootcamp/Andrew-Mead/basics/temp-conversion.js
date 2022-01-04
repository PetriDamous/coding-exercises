// convert stating fahrenheit temp to celsius and kelvein

// calculate celsius 
// print celsius value

// calculate kelvin
// print kelven value

let fahrenheit = 32;

let celsius = (fahrenheit - 32) * 5 / 9;

let kelvin = ((fahrenheit + 459.67) * 5 / 9).toFixed(2);

console.log(`${fahrenheit}\u00B0 F is ${celsius}\u00B0 C`);

console.log(`${fahrenheit}\u00B0 F is ${kelvin}\u00B0 K`);

