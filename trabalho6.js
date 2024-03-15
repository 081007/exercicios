let prompt = require('prompt-sync')();
let fahrenheit;
let celsius;
let f2;
 
fahrenheit =parseInt(prompt('digite o número: '));
celsius = (fahrenheit-32)*5/9;


console.log('o resultado da conversão é: ', celsius);
