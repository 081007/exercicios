let prompt = require('prompt-sync')();

let n1;
let n2;
let n3;
n1 = parseInt(prompt('Digite um número: '));
n2 = parseInt(prompt('Digite um número: '));
n3 = parseInt(prompt('Digite um número: '));

if (n1 > n2 & n1 > n3){
    console.log('O maior é: ', n1)
}
else if (n2 > n1 & n2 > n3){
    console.log('O maior é: ', n2)
}
else {
    console.log('O maior é: ', n3)
}
