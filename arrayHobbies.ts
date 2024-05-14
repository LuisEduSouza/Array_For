/*
Nome: Luís Eduardo Novaes Souza

1 – Faça dois vetores, um que contenha cada dia da semana,
o outro que contenha sete atividades/hobby. Crie uma frase
para cada dia da semana usando todos os índices dos dois vetores.

*/

console.clear();
const teclado = require(`prompt-sync`)();

let continuar: string = ``;
let meusHobbies: string [] = [`assitir filme`, `jogar vídeo Game`, `lutar`, `praticar esporte`, `cozinhar`, `assistir futebol`, `programar`];
let semana: string []= [`Domingo`,`Segunda-feira`, `Terça-feira`, `Quarta-feira`, `Quinta-feira`, `Sexta-feira`, `Sábado`];

for(let x = 0; x <= 6; x++){
    meusHobbies[x];
    semana[x];
    if (x === 6 || x === 0){
        console.log(`No ${semana[x]}, eu gosto de ${meusHobbies[x]} `);
        continuar = teclado(``);
    }
    else{
        console.log(`Na ${semana[x]}, eu gosto de ${meusHobbies[x]} `);
    continuar = teclado(``);
    }
}