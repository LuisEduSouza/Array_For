/* 3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console.
*/
console.clear();
var teclado = require("prompt-sync")();
var numeros = new Array(9);
var maior = 0;
for (var x = 1; x <= 10; x++) {
    numeros[x] = parseInt(teclado("Digite um n\u00FAmero para amarzenar ".concat(x, ": ")));
    if (numeros[x] > maior) {
        maior = numeros[x];
    }
}
console.log("O maior n\u00FAmero \u00E9  ".concat(maior));
