/*
Nome: Luís Eduardo Novaes

5- Faça um programa que dê entrada manual de 10 números
armazene em um vetor e ordene esses 10 números crescente,
fazer uso do laço de repetição for.
*/


const teclado = require(`prompt-sync`)();
console.clear()

let armazenamento: number [] = new Array (9);
let menor: number = 0;
let x: number = 0;

for (x = 0; x <= 9; x++){
    armazenamento[x] = parseInt(teclado(`Digite os números: `));
} 
for(let i = 0; i <= 9; i++){
    for (let y = i + 1 ; y <= 10; y++){
    if (armazenamento[i] > armazenamento[y]) {
    menor = armazenamento[i];
    armazenamento[i] = armazenamento[y];
    armazenamento[y] = menor;
    }
}
}

console.log(`Os números digitadas em ordem crescente são: `);
for (let z = 0; z <= 9; z++){
console.log(armazenamento[z]);
}
