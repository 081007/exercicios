let prompt = require('prompt-sync')();
let h;
let s;
h = parseInt(prompt('digite a altura: '));
s = parseInt(prompt('digite 1 para feminino e 2 para masculino: '));

switch(h){
    case 1:
        console.log('O peso ideal feminino é: ', (62.1 * h)-44.7);
        break;
    case 2: 
        console.log('O peso ideal masculino é: ', (72.7 * h)-58);
        break;
}