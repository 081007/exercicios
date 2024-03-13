let prompt = require('prompt-sync')();
let saldo;
const reajuste = saldo*1/100;
impressão = saldo * (reajuste);
saldo = parseInt(prompt('digite o número: '));
console.log('o resultado da impressão é: ', saldo+(saldo*1/100),'reais');




