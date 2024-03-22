let prompt = require('prompt-sync')();
let l;
let cm;


l = parseInt(prompt('Escolha o número conforme  a quantidade de lados : 3,4 e 5. '));
cm = parseInt(prompt('Quantos cm tem os lados do seu polígono? '));



switch(l){
    case 3:
        console.log('Triângulo, possui 3 lados e seu perímetro é de: ', cm *3);
        break;
    case 4: 
        console.log('Quadrado, possui 4 lados e sua área é de: ', cm * cm);
        break;
    case 5:
        console.log('Pentágono, possui 5 lados.');
        break;

    default:('o número digitado é inválido.');
        break;
}
if (isNaN(l)){
    console.log('Não é um polígono!');
 }
 else if (l != 3 || 4 || 5){
     console.log('Não pode ser informado esse valor!');}