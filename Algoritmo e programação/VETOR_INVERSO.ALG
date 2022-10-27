Algoritmo "vetor_inverso"
// Disciplina   : [Algoritmo]
// Professor   : MARCOS ALVES MARIANO
// Descrição   : exibi a ordem inversa do vetor
// Autor(a)    : Renan Francisco Magalhães Gatti
// Data atual  : 21/10/2022
Var
vet : vetor [0..9] de inteiro
vet2 : vetor [0..9] de inteiro
i, j : inteiro

Inicio
i <- 0
j <- 9
para i de 0 ate 9  faca
     escreva("Digite um número: ")
     leia(vet[i])
fimpara

para i de 0 ate 9 faca
     vet2[j] <- vet[i]
     j <- j - 1
fimpara

para i de 0 ate 9 faca
     escreval(vet2[i])
fimpara

Fimalgoritmo