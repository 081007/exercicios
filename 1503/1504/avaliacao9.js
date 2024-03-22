let prompt = require('prompt-sync')();
let nmaca;
nmaca = parseInt(prompt('digite quantas maçãs comprou: '));
let multi = nmaca * 30/100;

if (nmaca <12 ){
    console.log('O valor da compra é: ', multi);
 }
 else if (nmaca >= 12){
     console.log('O valor da compra é: ', multi);
 }
