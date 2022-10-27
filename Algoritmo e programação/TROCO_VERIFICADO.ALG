Algoritmo "troco_verificado"


Var
   dinheiro, unitario, total, troco, troco2 : real
   unidade : inteiro


Inicio
      escreva("Quantidade de unidades do produto: ")
      leia(unidade)
    escreva("Valor unitário: R$")
    leia(unitario)
     total <- unidade * unitario
     escreval("O valor total é: R$", total)
     escreva("Valor em diheiro: R$")
     leia(dinheiro)
      troco <- dinheiro - total
      troco2 <- total - dinheiro
      Se troco < 0 entao
       escreval("Faltou R$", troco2)
       senao
       se troco > 0 entao
       escreval("O valor do troco é R$", troco)
       fimse
       fimse



Fimalgoritmo