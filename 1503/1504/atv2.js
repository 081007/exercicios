let prompt = require('prompt-sync')();

let n1;
let n2;

n1 = parseInt(prompt('Digite um número: '));
n2 = parseInt(prompt('Digite um número: '));

if (n1 > n2 ){
    console.log('O maior é: ', n1)
}
else  if (n2 > n1) {
    console.log('O maior é: ', n2)

}