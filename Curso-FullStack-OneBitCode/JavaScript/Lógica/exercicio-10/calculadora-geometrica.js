let option = 0;
let base = 0;
let altura = 0;
let lado = 0;
let baseMaior = 0;
let baseMenor = 0;

do {
  option = prompt(
    "Programa calculadora geométrica! \n\n" +
      "Escolha qual conta deseja fazer: \n" +
      "1 - Calcular área do triângulo \n" +
      "2 - Calcular área do retângulo \n" +
      "3 - Calcular área do quadrado\n" +
      "4 - Calcular área do trapézio\n" +
      "5 - Calcular área do círculo\n" +
      "6 - SAIR"
  );

  switch (option) {
    case "1":
      function triangulo() {
        base = prompt("Qual a base do triângulo: ");
        altura = prompt("Qual a altura do triângulo: ");
        return (triangulo = (base * altura) / 2);
      }

      alert("A área do triângulo é: " + triangulo());

      break;

    case "2":
      function retangulo() {
        base = prompt("Qual a base do retângulo: ");
        altura = prompt("Qual a altura do retângulo: ");
        return (retangulo = base * altura);
      }
      alert("A área do retângulo é: " + retangulo());

      break;
    case "3":
      function quadrado() {
        lado = prompt("Qual o tamanho do lado do quadrado: ");
        return (quadrado = Math.pow(lado, 2));
      }
      alert("A área do quadrado é: " + quadrado());

      break;
    case "4":
      function trapezio() {
        baseMenor = prompt("Qual o tamanho da base menor: ");
        baseMaior = prompt("Qual o tamanho da base maior: ");
        altura = prompt("Qual a altura: ");
        let cont1 = altura / 2;
        let cont = parseFloat(baseMenor) + parseFloat(baseMaior);
        return cont * cont1;
      }
      alert("A área do trapézio é: " + trapezio());

      break;
    case "5":
      function circulo() {
        let raio = prompt("Qual o raio do círculo: ");
        return 3.14 * Math.pow(raio, 2);
      }
      alert("A área do circulo é: " + circulo());

      break;
    case "6":
      alert("Programa sendo encerrado!");
      break;
  }
} while (option !== "6");
