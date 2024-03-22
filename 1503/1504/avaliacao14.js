let prompt = require('prompt-sync')();
let gGrêmio;
let gGrenal;

gGrêmio = parseInt(prompt('digite o número de gols: '));
gInter = parseInt(prompt('digite o número de gols: '));


 //condição se
if (gGrêmio > gInter){
    console.log('Grêmio ganhou');
 }
 else if (gGrêmio < gInter){
     console.log('Inter ganhou');
 }else{
     console.log('Empate');
 }     