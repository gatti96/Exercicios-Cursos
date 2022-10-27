Algoritmo "media_ponderada"
// Disciplina   : [Algoritmo]
// Professor   : MARCOS ALVES MARIANO
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Renan Francisco Magalhães Gatti
// Data atual  : 19/10/2022
Var
   peso1, peso2, peso3, nota1, nota2, nota3 : inteiro
   multiplicacao1, multiplicacao2, multiplicacao3, soma1, soma2 : inteiro
   resultado : real


Inicio
      peso1 <- 2
      peso2 <- 3
      peso3 <- 5
      
      escreva("Qual a primeira nota: ")
      leia(nota1)
      escreva("Qual a segunda nota: ")
      leia(nota2)
      escreva("Qual a terceira nota: ")
      leia(nota3)
      
      multiplicacao1 <-  nota1 * peso1
      multiplicacao2 <-  nota2 * peso2
      multiplicacao3 <-  nota3 * peso3
      soma1 <- multiplicacao1 + multiplicacao2   multiplicacao3
      soma2 <- peso1 + peso2   peso3
      
      resultado <- soma1 / soma2

      escreval
      escreval("A média ponderada das notas é: ", resultado)

Fimalgoritmo