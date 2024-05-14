/*
Nome: Luís Eduardo Novaes Souza
7- Faça um programa para calcular n! (Fatorial de
n), sendo que o valor inteiro de n é fornecido pelo
usuário. utilize laço de repetição for.
*/
console.clear();
var teclado = require("prompt-sync")();
var fatorial = parseInt(teclado("Digite um n\u00FAmero para fatorar: "));
var resultado = 1;
for (var cont = 1; cont <= fatorial; cont++) {
    resultado = cont * resultado;
}
console.log("O fatorial de ".concat(fatorial, " \u00E9 igual: ").concat(resultado));
