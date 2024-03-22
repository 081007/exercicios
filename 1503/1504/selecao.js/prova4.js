let prompt = require('prompt-sync')();
let n1;
let n2;
let divisao = n1/n2;

do{
n1 = prompt ('digite a nota1: ');
n2 = prompt ('digite a nota2: ');
console.log(' O resultado da divisão é : ', n1/n2);
}while((n2 > 0));
console.log('Continue!');
do{
console.log(' Valor Inválido!');
}while(n2 <= 0  );
console.log('Valor Inválido!');
