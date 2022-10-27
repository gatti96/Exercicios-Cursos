Algoritmo "diagonal_principal"
// Disciplina   : [Algoritmo]
// Professor   : MARCOS ALVES MARIANO
// Descrição   : soma a diagonal principal da matriz
// Autor(a)    : Renan Francisco Magalhães Gatti
// Data atual  : 23/10/2022
Var
mat : vetor [0..4, 0..4] de inteiro
soma, i, j : inteiro


Inicio
soma <- 0
para i de 0 ate 4 faca
     para j de 0 ate 4 faca
          escreva("Digite o valor do elemento [", i, ",", j, "]: ")
          leia(mat[i, j])
     fimpara
fimpara

escreval

para i de 0 ate 4 faca
     para j de 0 ate 4 faca
          se (i = j) entao
             soma <- soma + mat[i, j]
          fimse
     fimpara
fimpara

escreva("O resultado da soma da diagonal principal é: ", soma)

Fimalgoritmo