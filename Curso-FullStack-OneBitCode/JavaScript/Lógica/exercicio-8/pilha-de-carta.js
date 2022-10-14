let card = ["Rei", "Dama", "Copas", "Paus"];

let cont = 0;

let addCard = "";
let removed = "";

for (let i = 0; i < card.length; i++) {
  cont = i + 1;
}

alert("Cartas atualmente no baralho " + cont);

let option = prompt(
  "Menu: \n\n" +
    "1 - Adicionar carta ao baralho\n" +
    "2 - Puxar uma carta\n" +
    "3 - SAIR"
);

while (option !== 3) {
  if (option == 1) {
    addCard = prompt("Qual carta vai adicionar?: ");
    card.unshift(addCard);
    cont = 0;
    for (let i = 0; i < card.length; i++) {
      cont = i + 1;
    }
    option = prompt(
      "Cartas atualmente no baralho " +
        cont +
        "\n\n" +
        "Menu: \n\n" +
        "1 - Adicionar carta ao baralho\n" +
        "2 - Puxar uma carta\n" +
        "3 - SAIR"
    );
  } else if (option == 2) {
    removed = card.shift(0);
    alert("Carta removida: " + removed);
    cont = 0;
    for (let i = 0; i < card.length; i++) {
      cont = i + 1;
    }
    option = prompt(
      "Cartas atualmente no baralho " +
        cont +
        "\n\n" +
        "Menu: \n\n" +
        "1 - Adicionar carta ao baralho\n" +
        "2 - Puxar uma carta\n" +
        "3 - SAIR"
    );
  } else if (option > 3) {
    alert("Opção errada! \n" + "escolha novamente");
    option = prompt(
      "Menu: \n\n" +
        "1 - Adicionar carta ao baralho\n" +
        "2 - Puxar uma carta\n" +
        "3 - SAIR"
    );
  } else {
    cont = 0;
    for (let i = 0; i < card.length; i++) {
      cont = i + 1;
    }
    alert("Cartas ao final - " + cont + "\n\nFinalizando...");
    option = 3;
  }
}
