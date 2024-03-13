let prompt = require('prompt-sync')();

let n1;
let n2;
let n3;
let média;

n1 = parseInt(prompt('digite a primeira nota: '));
n2 = parseInt(prompt('digite a segunda nota: '));
n3 = parseInt(prompt('digite a terceira nota: '));

média = (n1+n2+n3)/3

if (média>=7){
  console.log('aprovado')
}

else {
  console.log('reprovado')
}