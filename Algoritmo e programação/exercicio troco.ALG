Algoritmo "semnome"

Var
 preco, dinheiro, total : real
 unidade : inteiro


Inicio
      escreva("Qual o preço unitário do produto: ")
      leia(preco)
      escreva("Quantas unidades: ")
      leia(unidade)
      total <- unidade * preco
      escreval("Valor total da compra: ", total)
      escreva("Valor em dinheiro: ")
      leia(dinheiro)
      escreva("Valor do troco: ", (dinheiro - total))


Fimalgoritmo