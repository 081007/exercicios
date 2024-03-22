let prompt = require('prompt-sync')();
n1 = parseInt(prompt('digite a nota1: '));
n2 = parseInt(prompt('digite a nota2: '));
media =  (n1+n2)/2;
console.log('A média do(a) aluno(a) é; ', );
if  ((n1 >= 0)  & ( n1<= 10) & (n2 >= 0) & (n2 <=10)){
    console.log('Nota válida!')
    console.log(media)
}
else  {
    console.log('Nota inválida!') 
 }
