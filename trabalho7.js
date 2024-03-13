let prompt = require('prompt-sync')();
let fahrenheit;
let celsius;
let f2;

celsius = parseInt(prompt('digite o número: '));
fahrenheit = (celsius*9/5)+32;


console.log('o resultado da conversão é: ', fahrenheit);
