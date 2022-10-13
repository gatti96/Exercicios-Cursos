const numero = prompt("Qual tabuada você deseja: ");

let resultado = 0;
let printResultado = "Resultado é: ";

for (let i = 0; i <= 20; i++) {
  resultado = parseInt(numero) * i;
  printResultado =
    printResultado + "\n" + numero + " X " + i + " = " + resultado;
}

alert(printResultado);
