var prompt = require('prompt-sync')();

//declaração de variáveis
let n1;
let n2;

n1 = prompt ('digite a nota1: ');
n2 = prompt ('digite a nota2: ');

//condição se
if (n1 >= n2){
   console.log('n1 é maior que n2');
}
else{
    console.log('n2 é menor que n1');
}