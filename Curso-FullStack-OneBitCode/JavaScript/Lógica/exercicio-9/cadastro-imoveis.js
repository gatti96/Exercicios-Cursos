let bancoDados = [];
let cont = 0;
let proprietaryName = "";
let bedroom = 0;
let restroom = 0;
let garage = "";

for (let i = 0; i < bancoDados.length; i++) {
  cont = cont + 1;
}

let option = prompt(
  "Quantidade de imóveis cadastrados: " +
    cont +
    "\n\n Menu:" +
    "\n1 -Salvar novo imóvel" +
    "\n2 - Mostrar todos os imóveis salvos" +
    "\n3 - SAIR"
);

while (option !== 3) {
  if (option == 1) {
    proprietaryName = prompt("Qual o nome do proprietário: ");
    bedroom = prompt("Quantidade de quartos: ");
    restroom = prompt("Qual a quantidade de banheiros: ");
    garage = prompt("Possui garagem? (S/N):");

    do {
      if (garage == "S") {
        garage = "Sim";
      } else if (garage == "N") {
        garage = "Não";
      } else {
        garage = prompt(
          "Opção digitada errada!" +
            "\nDigite S para sim e N para não" +
            "\n\nPossui garagem? (S/N):"
        );
      }
    } while (garage != "Sim" && garage != "Não");

    const imoveis = {};
    imoveis.proprietario = proprietaryName;
    imoveis.quarto = bedroom;
    imoveis.banheiro = restroom;
    imoveis.garagem = garage;

    bancoDados.push(imoveis);

    for (let i = 0; i < bancoDados.length; i++) {
      cont = cont + 1;
    }

    option = prompt(
      "Quantidade de imóveis cadastrados: " +
        cont +
        "\n\n Menu:" +
        "\n1 -Salvar novo imóvel" +
        "\n2 - Mostrar todos os imóveis salvos" +
        "\n3 - SAIR"
    );
    cont = 0;
  } else if (option == 2) {
    for (let i = 0; i < bancoDados.length; i++) {
      alert(
        "Imóvel " +
          "\nProprietário: " +
          bancoDados[i].proprietario +
          "\nQuartos: " +
          bancoDados[i].quarto +
          "\nBanheiro: " +
          bancoDados[i].banheiro +
          "\nPossui garagem: " +
          bancoDados[i].garagem
      );
    }

    cont = 0;

    for (let i = 0; i < bancoDados.length; i++) {
      cont = cont + 1;
    }

    option = prompt(
      "Quantidade de imóveis cadastrados: " +
        cont +
        "\n\n Imóveis cadastrados:\n" +
        mostrarImoveis +
        "\n\n Menu:" +
        "\n1 -Salvar novo imóvel" +
        "\n2 - Mostrar todos os imóveis salvos" +
        "\n3 - SAIR"
    );
    cont = 0;
    mostrarImoveis = "";
  } else if (option > 3) {
    option = prompt(
      "Opção digitada errada! Escolha a opção certa: " +
        "\n\n Menu:" +
        "\n1 -Salvar novo imóvel" +
        "\n2 - Mostrar todos os imóveis salvos" +
        "\n3 - SAIR"
    );
  } else {
    for (let i = 0; i < bancoDados.length; i++) {
      cont = cont + 1;
    }

    alert("Programa encerrando com " + cont + " imóveis cadastrados.");
    option = 3;
  }
}
