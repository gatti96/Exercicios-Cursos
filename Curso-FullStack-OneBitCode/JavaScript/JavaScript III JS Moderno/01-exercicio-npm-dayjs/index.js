const dayjs = require("dayjs");
const readlineSync = require("readline-sync");

function birthday(date) {
  const birthday = dayjs(date);
  const today = dayjs();

  const idade = today.diff(birthday, "year");

  const proximoAniversario = birthday.add(idade + 1, "year");
  const diasParaAniversario = proximoAniversario.diff(today, "day");

  console.log(`Idade: ${idade}`);
  console.log(
    `Proximo aniversário é em: ${proximoAniversario.format("DD/MM/YYYY")}`
  );
  console.log(
    `Dias até completar ${idade + 1} anos: ${diasParaAniversario} dias`
  );
}

birthday("1996-03-11");
