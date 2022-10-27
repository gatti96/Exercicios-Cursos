Algoritmo "fatura"


Var
   minutos, extra : inteiro


Inicio
      escreva("Quantidade de minutos usados: ")
      leia(minutos)
      
      se minutos > 100 entao
       extra <- ((minutos - 100) *2) + 50,00
      senao
       se minutos <= 100 entao
       extra <- 50,00
      fimse
      fimse
       escreval("O valor da fatura é: R$",extra)



Fimalgoritmo