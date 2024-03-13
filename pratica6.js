let prompt = require('prompt-sync')();
let pos;

pos = parseInt(prompt('digite sua colocação: '));

switch(pos){
    case 1:
        console.log('primeiro lugar, medalha de ouro');
        break;
    case 2: 
        console.log('segundo lugar, medalha de prata');
        break;
    case 3:
        console.log('terceiro lugar, medalha de bronze');
        break;
    default:
        console.log('nothing');
            
}