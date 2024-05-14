let meuArrayUm: number [] = [12,24,20,16];
let meuArrayDois: string [] = [`Segunda-feira`,`Terça-feira`,`Quarta-feira`];
let meuArrayTres: number [] = new Array(3);
let total: number = 0;

console.clear();
const teclado = require(`prompt-sync`)();
let cont: number = 0;

do{
    meuArrayTres[cont] = parseInt(teclado(`Digite o número do índice ${cont}: `));
    cont++;
}while(cont < 3);

cont = 0;

do{
    total += meuArrayTres[cont]; 
    cont ++;
}while(cont <= 2);

console.log(total);