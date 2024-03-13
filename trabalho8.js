let prompt = require('prompt-sync')();
let salario;
let aumento;

 salario= parseInt(prompt('digite o número: '));
 percentual= parseInt(prompt('digite o número: '));
 aumento = salario*percentual/100
 tsalario = salario + aumento;

 console.log('o resultado do aumento é: ', aumento);
 console.log('o resultado do tsalario é: ', tsalario);
 