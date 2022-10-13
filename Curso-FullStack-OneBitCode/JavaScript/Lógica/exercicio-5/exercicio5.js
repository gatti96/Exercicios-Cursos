const valorMetros = prompt("Digite o valor em metros: ");
const unidadeConversao = prompt(
  "Para qual unidade será convertido: (mm/cm/dm/dam/hm/km)"
);

resultado = 0;

switch (unidadeConversao) {
  case "mm":
    resultado = valorMetros * 1000;
    alert("O valor em milimetros é " + resultado);
    break;
  case "cm":
    resultado = valorMetros * 100;
    alert("O valor em centímetros é " + resultado);
    break;
  case "dm":
    resultado = valorMetros * 10;
    alert("O valor em decímetros é " + resultado);
    break;
  case "dam":
    resultado = valorMetros / 10;
    alert("O valor em decâmetro é " + resultado);
    break;
  case "hm":
    resultado = valorMetros / 100;
    alert("O valor em hectômetro é " + resultado);
    break;
  case "km":
    resultado = valorMetros / 1000;
    alert("O valor em quilômetro é " + resultado);
    break;
  default:
    alert("Opção inválida");
}
