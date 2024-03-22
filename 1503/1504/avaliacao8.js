let prompt = require('prompt-sync')();

let nascimento;
nascimento = parseInt(prompt('digite o ano de seu nascimento: '));

 

if (nascimento <= 2008){
    console.log('Poderá votar esse ano.');
 }
 else if (nascimento > 2008){
     console.log('Não poderá.');
 }