let prompt = require('prompt-sync')();

n1 = parseInt(prompt('digite a primeira nota: '));
n2 = parseInt(prompt('digite a segunda nota: '));
while (n2 = n1){
    n2 = parseInt(prompt('Digite um valor diferente de n1: '))
}
n3 = parseInt(prompt('digite a terceira nota: '));
while(n3 = n2 & n3 === n1){
    n3 = parseInt(prompt('digite um valor diferente: '))
}

if (n1 > n2 & n1 > n3){
    console.log('O maior é: ', n1)
}
else if (n2 > n1 & n2 > n3){
    console.log('O maior é: ', n2)
}
else {
    console.log('O maior é: ', n3)
}