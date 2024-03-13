let prompt = require('prompt-sync')();

let n1;
let n2;
let n3;
let media;

n1 = parseInt(prompt('digite a primeira nota: '));
n2 = parseInt(prompt('digite a segunda nota: '));
n3 = parseInt(prompt('digite a terceira nota: '));

media = (n1+n2+n3)/3

if (media>=7){
    console.log('Aprovado')}

else if(media >=5 & media < 7) {
    console.log('Recuperação')}

else{
    console.log('Reprovado!')
}