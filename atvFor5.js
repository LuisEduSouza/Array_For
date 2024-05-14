/*
Nome: Luís Eduardo Novaes

5- Faça um programa que dê entrada manual de 10 números
armazene em um vetor e ordene esses 10 números crescente,
fazer uso do laço de repetição for.
*/
var teclado = require("prompt-sync")();
console.clear();
var armazenamento = new Array(9);
var menor = 0;
var x = 0;
for (x = 0; x <= 9; x++) {
    armazenamento[x] = parseInt(teclado("Digite os n\u00FAmeros: "));
}
for (var i = 0; i <= 9; i++) {
    for (var y = i + 1; y <= 10; y++) {
        if (armazenamento[i] > armazenamento[y]) {
            menor = armazenamento[i];
            armazenamento[i] = armazenamento[y];
            armazenamento[y] = menor;
        }
    }
}
console.log("Os n\u00FAmeros digitadas em ordem crescente s\u00E3o: ");
for (var z = 0; z <= 9; z++) {
    console.log(armazenamento[z]);
}
