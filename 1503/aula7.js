let prompt = require('prompt-sync')();

valor = parseFloat(prompt('Qual o valor do produto? R$'))
let produto;

while(produto != 'n'){
     produto = prompt('Quer comprar mais? (S/N) ')
     console.log('O valor é', valor)
     valor += valor
}
