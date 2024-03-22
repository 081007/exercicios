let prompt = require('prompt-sync')();
let n1;
let n2;
let ap;
n1 = prompt ('digite a nota1: ');
n2 = prompt ('digite a nota2: ');
ap = prompt ('digite a nota da ap: ');
let média = (n1+n2+ap)/3
switch(média)
{

    case 1:
        if  (((n1+n2+ap)/3 >= 6)){
           console.log('Aprovado');}
    else  ((n1+n2+ap)/3 >=3  & (n1+n2+ap)/3 <6 ); {
           console.log('exame.')
    }
    
    else if ((n1+n2+ap)/3 < 3){
    
           console.log('Reprovado');
    }
}
{
    case 2:
        if ((ap =  0));
        console.log( ' -1')
}