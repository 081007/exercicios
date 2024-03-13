const prompt = require('prompt-sync')();
//declaração de variáveis

let id;
let tempo;
let sl;
let sb;
let tt;

id = prompt ('digite a idade: ');
tempo = prompt ('digite o tempo: ');
sl = prompt ('digite o salário líquido: ');
sb = prompt ('digite o salário bruto: ');

//condição se
if ((tempo>3) && (id>25) && (sl>2500) || (sb>=9000)||(tempo>20)){
    console.log('Cadastro Aprovado')}
else{
    console.log('Cadastro Reprovado')
}