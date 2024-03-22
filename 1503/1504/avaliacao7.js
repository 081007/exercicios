let prompt = require('prompt-sync')();
let n1;
let n2;



n1 = parseInt(prompt('digite a primeira nota: '));
n2 = parseInt(prompt('digite a segunda nota: '));


if (n1 > n2 ){
    console.log('O maior é: ', n1)
}
else  (n2 > n1);{
    console.log('O maior é: ', n2)
}


