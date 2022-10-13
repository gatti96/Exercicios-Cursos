const turista = prompt("Qual o nome do turista?: ");
let visitou = prompt("Já visitou alguma cidade?: (S/N)");

let cidade = "";
let cidadeVisitada = "";
let quantcidades = 0;

while (visitou == "S") {
  cidade = prompt("Qual cidade visitou?: ");
  cidadeVisitada = cidadeVisitada + ", " + cidade;
  quantcidades = quantcidades + 1;
  visitou = prompt("Já visitou alguma cidade?: (S/N)");
}

alert(
  "Turista " +
    turista +
    "\nTotal  de cidades visitadas: " +
    quantcidades +
    "\nVisitou as cidades: " +
    cidadeVisitada +
    "."
);
