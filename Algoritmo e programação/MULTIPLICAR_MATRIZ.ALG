Algoritmo "multiplicar_matriz"
// Disciplina   : [Algoritmo]
// Professor   : MARCOS ALVES MARIANO
// Descrição   : multiplica o  valores de uma matriz e salva em outra
// Autor(a)    : Renan Francisco Magalhães Gatti
// Data atual  : 23/10/2022
Var
mat1 : vetor [0..4, 0..4] de inteiro
mat2 : vetor [0..4, 0..4] de inteiro
x, i, j : inteiro


Inicio
para i de 0 ate 4 faca
     para j de 0 ate 4 faca
          escreva("Digite o valor do elemento [", i, ",", j, "]: ")
          leia(mat1[i, j])
     fimpara
fimpara

escreval
escreva("Digite o valor para multiplicar a matriz: ")
leia(x)
escreval

escreval("Matriz multiplicada:")

para i de 0 ate 4 faca
     para j de 0 ate 4 faca
          mat2[i, j] <- mat1 [i, j] * x
          escreval("Elemento [", i,",",j,"]: ", mat2[i, j])
     fimpara
fimpara

Fimalgoritmo