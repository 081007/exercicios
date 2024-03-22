let prompt = require('prompt-sync')();
//declaração de variáveis
let n1;


n1 = prompt ('digite a nota1: ');


//condição se
if (n1>0){
   console.log('positivo');
}
else if (n1<0){
    console.log('negativo');
}else{
    console.log('o número é igual a zero');
}                                                                                                                 