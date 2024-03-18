let prompt = require('prompt-sync')();
let n1;
let i = 1;

n1 = parseInt(prompt('Digite um número: '));
 while(i < 11) {
console.log(n1, 'x', i , '=', n1*i  +  '   divisão:      ', n1, '/', i, '=', n1/i + '         soma:                 ', n1, '+', i, '=', n1+i + '   subtração:   ', n1, '-', i, '=', n1-i)
i++
 }

 