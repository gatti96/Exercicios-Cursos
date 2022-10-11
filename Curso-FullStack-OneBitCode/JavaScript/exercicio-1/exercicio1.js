let firstName = prompt("Digite seu primeiro nome:");

let lastName = prompt("Digite seu sobrenome:");

let campoEstudo = prompt("Qual seu campo de estudo?:");

let anoNascimento = prompt("Qual seu ano de nascimento?:");

let idade = 2022 - anoNascimento;

alert(
  "Cadastrado com sucesso!\n" +
    "Nome copleto: " +
    firstName +
    " " +
    lastName +
    "\n Campo de estudo: " +
    campoEstudom +
    "\n Idade: " +
    idade
);
