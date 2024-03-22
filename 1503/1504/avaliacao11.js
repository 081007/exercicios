let prompt = require('prompt-sync')();
let senha;
do{
senha = parseInt(prompt('digite a senha: '));


 } while (senha);
 
 console.log(' Permitido: '+ senha);
 if (isNaN(senha)){
    console.log('Negado!');
 }
 else if (senha != 1234){
     console.log('Negado!');}