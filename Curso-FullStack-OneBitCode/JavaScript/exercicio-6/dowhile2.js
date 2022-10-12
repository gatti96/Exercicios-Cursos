let disponivel = prompt("Quantidade inicial de dinheiro: ");
let opcao = prompt(
  "Valor disponível: " +
    disponivel +
    "\nEscolha uma das opções: \n" +
    "1 - Adicionar dinheiro\n" +
    "2 - Remover dinheiro\n" +
    "3 - Sair"
);

let incluir = 0;
let remover = 0;

do {
  switch (opcao) {
    case "1":
      incluir = prompt("Qual valor deseja adicionar?: ");
      disponivel = parseInt(disponivel) + parseInt(incluir);
      opcao = prompt(
        "Valor disponível: " +
          disponivel +
          "\nEscolha uma das opções: \n" +
          "1 - Adicionar dinheiro\n" +
          "2 - Remover dinheiro\n" +
          "3 - Sair"
      );
      break;
    case "2":
      remover = prompt("Qual valor deseja remover?: ");
      disponivel = parseInt(disponivel) - parseInt(remover);
      opcao = prompt(
        "Valor disponível: " +
          disponivel +
          "\nEscolha uma das opções: \n" +
          "1 - Adicionar dinheiro\n" +
          "2 - Remover dinheiro\n" +
          "3 - Sair"
      );
      break;
    case "3":
      break;
  }
} while (opcao !== "3");

alert("Saldo ao finalizar: " + disponivel);

alert("Fechando programa");
