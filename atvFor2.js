/*
Nome: Luís Eduardo Novaes Souza
2- Exibir os números pares de 0 a 60, fazer uso do laço
de repetição for.
*/
for (var cont = 0; cont <= 60; cont++) {
    if (cont % 2 == 0) {
        console.log("O n\u00FAmero ".concat(cont, " \u00E9 par!"));
    }
}
