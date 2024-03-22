let prompt = require('prompt-sync')();

let numero;
do{
numero = prompt('Digite um número: ');
} while (isNaN(numero));

console.log('Você digitou um número válido: '+ numero);
