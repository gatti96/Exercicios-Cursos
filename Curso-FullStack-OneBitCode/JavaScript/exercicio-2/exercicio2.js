const number1 = prompt("Digite um numero: ");
const number2 = prompt("Digite outro numero: ");

const soma = parseInt(number1) + parseInt(number2);
const divisao = number1 / number2;
const multiplicacao = number1 * number2;
const subtracao = number1 - number2;

alert(
  "Resultado da soma: " +
    soma +
    "\nResultado da subtração: " +
    subtracao +
    "\nResultado da divisão: " +
    divisao +
    "\nResultado da multiplicação: " +
    multiplicacao
);
