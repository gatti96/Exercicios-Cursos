let nomeVeiculo1 = prompt("Digite o nome do primeiro veículo: ");
let velocidade1 = prompt(
  "Digite a velocidade do veículo " + nomeVeiculo1 + ": "
);

let nomeVeiculo2 = prompt("Digite o nome do segundo veículo: ");
let velocidade2 = prompt(
  "Digite a velocidade do veículo " + nomeVeiculo2 + ": "
);

if (velocidade1 > velocidade2) {
  alert("O " + nomeVeiculo1 + " é mais rápido.");
} else if (velocidade1 == velocidade2) {
  alert("As velocidades são iguais");
} else {
  alert("O " + nomeVeiculo2 + " é mais rápido.");
}
