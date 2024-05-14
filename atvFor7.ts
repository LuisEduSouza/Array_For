/*
Nome: Luís Eduardo Novaes Souza
7- Faça um programa para calcular n! (Fatorial de
n), sendo que o valor inteiro de n é fornecido pelo
usuário. utilize laço de repetição for.
*/

console.clear();
const teclado = require(`prompt-sync`)();

let fatorial: number = parseInt(teclado(`Digite um número para fatorar: `))
let resultado = 1;
for(let cont = 1; cont <= fatorial; cont++){
    resultado = cont * resultado;
}
console.log(`O fatorial de ${fatorial} é igual: ${resultado}`);