let prompt = require('prompt-sync')();
let n1;
let n2;
n1 = prompt ('digite a nota1: ');
n2 = prompt ('digite a nota2: ');

let divisao = n1/n2;
console.log(' O resultado da divisão é : ', n1/n2);
if  ((n2 <= 0)){
    console.log('Não pode utilizar este valor !')}
else  {
    console.log('continue ...') 
 }
