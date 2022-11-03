function media(...numbers) {
  const number = numbers;
  let media = 0;
  for (let i = 0; i < number.length; i++) {
    media = media + number[i];
  }
  return `A media dos  numeros é ` + media / numbers.length;
}

function mediaPonderada(n1, n2, n3, p1, p2, p3) {
  const some = n1 * p1 + n2 * p2 + n3 * p3;
  return "A média ponderada das notas é " + some / (p1 + p2 + p3);
}

function mediana(...numberMediana) {
  const numeroMediana = numberMediana;

  if (numberMediana.length % 2 == 0) {
    let position = numberMediana.length / 2;
    return (
      "A mediana é " +
      (numeroMediana[position - 1] + numeroMediana[position]) / 2
    );
  } else {
    position = (numberMediana.length - 1) / 2;
    return "A mediana  é " + numeroMediana[position];
  }
}

function moda(...numbers) {
  const quantities = numbers.map((num) => [
    num,
    numbers.filter((n) => num === n).length,
  ]);
  quantities.sort((a, b) => b[1] - a[1]);
  return quantities[0][0];
}
