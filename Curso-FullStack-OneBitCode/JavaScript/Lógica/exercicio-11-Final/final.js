vagas = [];
option = 0;
nomeVaga = "";
descriçãoVaga = "";
dataLimite = "";
confirmacao = true;
nomeCandidato = "";
indice = 0;
confirmCandidato = true;
i = 0;
cont = 0;
contar = 0;

function incluirVaga() {
  const vaga = {};
  vaga.nome = nomeVaga;
  vaga.descricao = descriçãoVaga;
  vaga.limite = dataLimite;
  vaga.candidatos = [];

  vagas.push(vaga);
}

function mostrarVaga() {
  return (
    "Vaga: " +
    vagas[indice - 1].nome +
    "\nDescrição: " +
    vagas[indice - 1].descricao +
    "\nData limite: " +
    vagas[indice - 1].limite
  );
}
function mostrarVaga2() {
  alert(
    "Vaga: " +
      vagas[indice - 1].nome +
      "\nDescrição: " +
      vagas[indice - 1].descricao +
      "\nData limite: " +
      vagas[indice - 1].limite +
      "\nQuantidade de candidatos: " +
      vagas[indice - 1].candidatos.length
  );
}

function incluirCandidato() {
  vagas[indice - 1].candidatos.push(nomeCandidato);
}

function contarCandidatos() {
  cont = vagas[i].candidatos.length;

  return cont;
}

function vagasDisponiveis() {
  for (i = 0; i < vagas.length; i++) {
    contar = contar + 1;

    alert(
      "Indice: " +
        contar +
        "\nVaga: " +
        vagas[i].nome +
        "\nDescrição: " +
        vagas[i].descricao +
        "\nData limite: " +
        vagas[i].limite +
        "\nQuantidade de candidatos inscritos: " +
        contarCandidatos() +
        "\n\n"
    );
  }
  contar = 0;
}

do {
  option = prompt(
    "Sistema vagas de emprego! \n\n" +
      "Escolha qual conta deseja fazer: \n" +
      "1 - Listar vagas disponíveis\n" +
      "2 - Criar um nova vaga \n" +
      "3 - Visualizar uma vaga\n" +
      "4 - Inscrever um candidato em uma vaga\n" +
      "5 - Excluir uma vaga\n" +
      "6 - SAIR"
  );
  switch (option) {
    case "1":
      vagasDisponiveis();
      break;
    case "2":
      nomeVaga = prompt("Nome da vaga: ");
      descriçãoVaga = prompt("Digite a descrição da vaga: ");
      dataLimite = prompt(
        "Digite a data limite da vaga: (exemplo: dd/mm/aaaa)"
      );

      confirmacao = confirm(
        "Deseja salvar a vaga?\n" +
          "Nome: " +
          nomeVaga +
          "\nDescição da vaga: " +
          descriçãoVaga +
          "\nData limite: " +
          dataLimite
      );

      if (confirmacao == true) {
        incluirVaga();
      } else {
        nomeVaga = "";
        descriçãoVaga = "";
        dataLimite = "";
      }

      break;
    case "3":
      indice = 0;
      indice = prompt("Qual o índice da vaga: ");
      mostrarVaga2();
      break;

    case "4":
      indice = 0;
      nomeCandidato = 0;
      nomeCandidato = prompt("Digite o nome do candadito: ");
      indice = prompt("Qual o índice da vaga: ");

      confirmCandidato = confirm(
        "Deseja inscrever o candidato " +
          nomeCandidato +
          " para a vaga:\n" +
          mostrarVaga()
      );
      if (confirmCandidato == true) {
        incluirCandidato();
      } else {
        nomeCandidato = "";
      }
      break;
    case "5":

    case "6":
      alert("Programa sendo encerrado!");
      break;
  }
} while (option !== "6");
