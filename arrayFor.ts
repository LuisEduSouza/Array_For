/*
Nome: Luís Eduardo Novaes Souza

2 – Faça um laço de repetição que contenha uma operação
aritmética qualquer , esse laço vai se repetir 10x utilizando
entrada de dados (prompt Sync), os resultados de cada operação
será armazenado em um vetor, após o termino do laço de
repetição os resultados de cada operação armazenada deve ser
exibido (com laço de repetição ou não).

*/

console.clear();
const teclado = require(`prompt-sync`)();

let armazenamento: number [] = new Array(9);

for( let x = 1; x <= 10; x++){
    armazenamento[x] = parseInt(teclado(`Digite um número para amarzenar ${x}: `));
}

for( let y = 1; y <= 10; y++){
    console.log (teclado(`Os números digitados são ${armazenamento[y]}`));
}
