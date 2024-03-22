let n1;
let n2;

let prompt = require('prompt-sync')();
let operação;

operação = parseInt(prompt('digite sua colocação: '));
n1 = parseInt(prompt('digite o número correspondente a n1: '));
n2 = parseInt(prompt('digite o número correspondente a n2: '));


switch(operação){
    case 1:
        console.log('o produto da soma é ', n1+n2);
        break;
    case 2: 
        console.log('o resultado da divisão é ', n1/n2);
        break;
    case 3:
        console.log('o resultado da mult é ', n1*n2);
        break;
    case 4:
        console.log('o resultado da subtra é ', n1-n2);
        break;
    default:
        console.log('nada');
            
}
if (isNaN(n1 & n2)){
    console.log('Negado!');
 }
 else if (n1 & n2 != 1234){
     console.log('Negado!');}