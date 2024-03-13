let prompt = require('prompt-sync')();
let n1;
let n2;
let n3;

let média=((n1+n2+n3)/3);

n1= parseInt(prompt('digite o número: '));
n2= parseInt(prompt('digite o número: '));
n3= parseInt(prompt('digite o número: '));

console.log('o resultado da média é: ', (n1+n2+n3)/3);


