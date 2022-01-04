function extractCurrencyValue(str) {
    return str = +str.slice(1);
}

console.log(extractCurrencyValue('$120'));