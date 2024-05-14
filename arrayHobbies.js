console.clear();
var teclado = require("prompt-sync")();
var continuar = "";
var meusHobbies = ["assitir filme", "jogar v\u00EDdeo Game", "lutar", "praticar esporte", "cozinhar", "assistir futebol", "programar"];
var semana = ["Domingo", "Segunda-feira", "Ter\u00E7a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S\u00E1bado"];
for (var x = 0; x <= 6; x++) {
    meusHobbies[x];
    semana[x];
    if (x === 6 || x === 0) {
        console.log("No ".concat(semana[x], ", eu gosto de ").concat(meusHobbies[x], " "));
        continuar = teclado("");
    }
    else {
        console.log("Na ".concat(semana[x], ", eu gosto de ").concat(meusHobbies[x], " "));
        continuar = teclado("");
    }
}
