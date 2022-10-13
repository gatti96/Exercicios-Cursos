let personagem1 = prompt("Digite o nome do personagem 1: ");
let poderAtaque1 = prompt("Digite o poder de ataque do " + personagem1 + ": ");

let personagem2 = prompt("Digite o nome do personagem 2: ");
let pontosDeVida = prompt("Digite os pontos de vida do " + personagem2 + ": ");
let podeDefesa = prompt("Digite os poder de defesa do " + personagem2 + ": ");
let escudo = prompt("o" + personagem2 + " possui um escudo: S/N ");

let dano = 0;

if (poderAtaque1 > podeDefesa && escudo === "N") {
  dano = poderAtaque1 - podeDefesa;
} else if (poderAtaque1 > podeDefesa && escudo === "S") {
  dano = (poderAtaque1 - podeDefesa) / 2;
} else if (poderAtaque1 <= podeDefesa) {
  dano = 0;
}

pontosDeVida = pontosDeVida - dano;

alert(
  "Fim do jogo!\n" +
    "Danos causados: " +
    dano +
    "\nO " +
    personagem2 +
    " possui " +
    pontosDeVida +
    " pontos de vida"
);
