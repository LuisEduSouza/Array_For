/* 3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console.
*/

console.clear();
const teclado = require(`prompt-sync`)();

let numeros: number [] = new Array(9);
let maior: number = 0
for( let x = 1; x <= 10; x++){
    numeros[x] = parseInt(teclado(`Digite um número para amarzenar ${x}: `));
    if(numeros[x] > maior){
        maior = numeros[x];
    }
}
console.log(`O maior número é  ${maior}`);

