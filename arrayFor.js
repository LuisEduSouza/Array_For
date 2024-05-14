console.clear();
var teclado = require("prompt-sync")();
var armazenamento = new Array(9);
for (var x = 1; x <= 10; x++) {
    armazenamento[x] = parseInt(teclado("Digite um n\u00FAmero para amarzenar ".concat(x, ": ")));
}
for (var y = 1; y <= 10; y++) {
    console.log(teclado("Os n\u00FAmeros digitados s\u00E3o ".concat(armazenamento[y])));
}
