let prompt = require('prompt-sync')();

let salario;

salario= parseInt(prompt('digite o salário: '));

if (isNaN(salario)){
    console.log('não é um número');
  

}else{
     console.log('é um número');
}