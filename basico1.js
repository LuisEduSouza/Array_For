var meuArrayUm = [12, 24, 20, 16];
var meuArrayDois = ["Segunda-feira", "Ter\u00E7a-feira", "Quarta-feira"];
var meuArrayTres = new Array(3);
var total = 0;
console.clear();
var teclado = require("prompt-sync")();
var cont = 0;
do {
    meuArrayTres[cont] = parseInt(teclado("Digite o n\u00FAmero do \u00EDndice ".concat(cont, ": ")));
    cont++;
} while (cont < 3);
cont = 0;
do {
    total += meuArrayTres[cont];
    cont++;
} while (cont <= 2);
console.log(total);
