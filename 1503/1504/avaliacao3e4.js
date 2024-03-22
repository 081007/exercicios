let prompt = require('prompt-sync')();
let n1;
let n2;

n1 = prompt ('digite a nota1: ');
n2 = prompt ('digite a nota2: ');

let média = (n1+n2)/2

    
        if  (((n1+n2)/2 >= 6) && ((n1+n2)/2 <6 )){
           console.log('PARABÉNS você foi aprovado!')}
    else  {
           console.log('Você foi REPROVADO! Estude mais ...') 
        }
    