/*
Nome: Luís Eduardo Novaes Souza

4 – Faça um programa que dê entrada manual de 10 números
armazene em um vetor, em seguida inverter a ordem de
armazenamento em outro vetor, utilize laços de repetição para
fazer essa atividade
*/

console.clear();
const teclado = require(`prompt-sync`)();

let armazenamento: number [] = new Array(9);
let armazenamentoInverso: number [] = new Array(9);
let z: number = 0;

for( let x = 0; x <= 9; x++){
    armazenamento[x] = parseInt(teclado(`Digite um número para amarzenar ${x}: `));
}

for( let y = 9; y >= 0; y--){
    armazenamentoInverso[z] = armazenamento[y];
    z++;
}
console.log(armazenamento);
console.log(armazenamentoInverso);





