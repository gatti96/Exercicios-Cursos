let opcao = prompt(
  "Escolha uma das opções: \n" +
    "1 - Inicio\n" +
    "2 - Noticias\n" +
    "3 - Sobre\n" +
    "4 - Contato\n" +
    "5 - Finalizar"
);

do {
  switch (opcao) {
    case "1":
      alert("A opção escolhida foi 1 - Inicio");
      opcao = prompt(
        "Escolha uma das opções: \n" +
          "1 - Inicio\n" +
          "2 - Noticias\n" +
          "3 - Sobre\n" +
          "4 - Contato\n" +
          "5 - Finalizar"
      );
      break;
    case "2":
      alert("A opção escolhida foi 2 - Noticias");
      opcao = prompt(
        "Escolha uma das opções: \n" +
          "1 - Inicio\n" +
          "2 - Noticias\n" +
          "3 - Sobre\n" +
          "4 - Contato\n" +
          "5 - Finalizar"
      );
      break;
    case "3":
      alert("A opção escolhida foi 3 - Sobre");
      opcao = prompt(
        "Escolha uma das opções: \n" +
          "1 - Inicio\n" +
          "2 - Noticias\n" +
          "3 - Sobre\n" +
          "4 - Contato\n" +
          "5 - Finalizar"
      );
      break;
    case "4":
      alert("A opção escolhida foi 4 - Contato");
      opcao = prompt(
        "Escolha uma das opções: \n" +
          "1 - Inicio\n" +
          "2 - Noticias\n" +
          "3 - Sobre\n" +
          "4 - Contato\n" +
          "5 - Finalizar"
      );
      break;
    case "5":
      break;
  }
} while (opcao !== "5");

alert("O programa está sendo encerrado!");
