Algoritmo "comerciante"

Var
   n, i, lucro1, lucro2, lucro3 : inteiro
   lucro, total_compra, total_venda, lucro_geral : real
   nome : vetor [0..9] de caractere
   valor_compra : vetor [0..9] de real
   valor_venda : vetor [0..9] de real

Inicio
      escreva("Serao digitados dados de quantos produtos? ")
      leia(n)
      
      para i de 0 ate n-1 faca
      escreva("nome: ")
      leia(nome[i])
      escreva("Valor de compra: ")
      leia(valor_compra[i])
      escreva("Valor de venda: ")
      leia(valor_venda[i])
      fimpara
      
      escreval
      lucro <- 0
      lucro1 <- 0
      lucro2 <- 0
      lucro3 <- 0
      
     para i de 0 ate n-1 faca
     lucro <- ((valor_venda[i] * 100) / valor_compra[i]) - 100
     se lucro < 10 entao
     lucro1 <- lucro1 + 1
     senao
       se (lucro >= 10) e (lucro <= 20) entao
       lucro2 <- lucro2 + 1
         senao
         lucro3 <- lucro3 + 1
       fimse
     fimse
     fimpara
     
     total_compra <- 0
     total_venda <- 0
     lucro_geral <- 0
     
     para i de 0 ate n-1 faca
     total_compra <- total_compra + valor_compra[i]
     total_venda <- total_venda + valor_venda[i]
     fimpara
     
     lucro_geral <- ((total_venda * 100) / total_compra) - 100
     
     escreval("RELATORIO: ")
     escreval("Lucro abaixo de 10%: ", lucro1)
     escreval("Lucro entre 10% e 20%: ", lucro2)
     escreval("Lucro acima de 20%: ", lucro3)
     escreval("Valor total de compra: ", total_compra)
     escreval("Valor total de venda: ", total_venda)
     escreval("Lucro total: ", lucro_geral:8:3)

Fimalgoritmo