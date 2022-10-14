let list = ["Marcos", "Rian", "Luzia", "Leticia"];

let nameList = "Lista dos pacientes aguardando: \n";
let cont = 0;
let removed = "";
let include = "";
let select = 0;

for (let i = 0; i < list.length; i++) {
  cont = i + 1;
  nameList = nameList + "\n" + cont + "-" + list[i];
}

select = prompt(
  "Consultorio médico\n\n" +
    nameList +
    "\n\nO que deseja fazer: \n" +
    "1 - Consultar\n" +
    "2 - Incluir na fila\n" +
    "3 - SAIR"
);

while (select !== 3) {
  if (select == 1) {
    removed = list.shift(0);
    select = prompt(
      "Um paciente consultado: " +
        removed +
        "\n\n" +
        "O que deseja fazer: \n" +
        "1 - Consultar\n" +
        "2 - Incluir na fila\n" +
        "3 - SAIR"
    );
  } else if (select == 2) {
    include = prompt("Qual o nome do paciente: ");
    list.push(include);
    select = prompt(
      "Um paciente incluído: " +
        include +
        "\n\n" +
        "O que deseja fazer: \n" +
        "1 - Consultar\n" +
        "2 - Incluir na fila\n" +
        "3 - SAIR"
    );
  } else if (select > 3) {
    alert("Numero digitado está errado!");
    select = prompt(
      "Digite novamente: \n\n" +
        "O que deseja fazer: \n" +
        "1 - Consultar\n" +
        "2 - Incluir na fila\n" +
        "3 - SAIR"
    );
  } else {
    nameList = "Lista que restou: \n";
    for (let i = 0; i < list.length; i++) {
      cont = i + 1;
      nameList = nameList + "\n" + cont + "-" + list[i];
    }
    alert(nameList);
    alert("Encerrando...");
    select = 3;
  }
}
