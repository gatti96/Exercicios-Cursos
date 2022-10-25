let jogadores = [];
let confirmar = true;
let i = 0;
let indice = 0;

function limparCampos() {
  document.getElementById("position").value = "";
  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
}

function removeTela() {
  const elemento = document.querySelector("#jogadores");

  elemento.parentNode.removeChild(elemento);
}

function jogadorNaTela() {
  const jogadorSection = document.getElementById("listaJogadores");
  const div1 = document.createElement("div");
  div1.id = "jogadores";
  jogadorSection.appendChild(div1);

  for (i = 0; i < jogadores.length; i++) {
    const jogadorSection2 = document.getElementById("jogadores");
    const div = document.createElement("div");
    const p = document.createElement("p");
    const span1 = document.createElement("span");
    span1.innerText = "Nome: " + jogadores[i].nome;

    const span2 = document.createElement("span");
    span2.innerText = "Camisa: " + jogadores[i].camisa;

    const span3 = document.createElement("span");
    span3.innerText = "Posição: " + jogadores[i].posicao;

    span2.appendChild(document.createElement("br"));
    span2.appendChild(span3);
    span1.appendChild(document.createElement("br"));
    span1.appendChild(span2);
    p.appendChild(span1);
    div.appendChild(p);

    jogadorSection2.appendChild(div);
  }
}

function escalar() {
  const camisa = document.getElementById("number").value;
  const posicao = document.getElementById("position").value;
  const nome = document.getElementById("name").value;

  if (camisa == "") {
    alert("Digite o numero da camisa");
  } else if (posicao == "") {
    alert("Digite a posição");
  } else if (nome == "") {
    alert("Digite o nome");
  } else {
    const jogador = new Object();
    jogador.camisa = camisa;
    jogador.posicao = posicao;
    jogador.nome = nome;

    confirmar = confirm(
      "Deseja escalar o jogador: \n\n" +
        "Nome: " +
        jogador.nome +
        "\nPosição: " +
        jogador.posicao +
        "\nCamisa: " +
        jogador.camisa
    );

    if (confirmar == true) {
      jogadores.push(jogador);
      limparCampos();
      removeTela();
      jogadorNaTela();
    } else {
      alert("Candidato exluido");
      limparCampos();
    }
  }
}

function remover() {
  const camisaRemove = document.getElementById("camisa").value;

  for (i = 0; i < jogadores.length; i++) {
    if (jogadores[i].camisa == camisaRemove) {
      jogadores.splice(i, 1);
      document.getElementById("camisa").value = ""; //para limpar o input
    }
  }

  removeTela();
  jogadorNaTela();
}
