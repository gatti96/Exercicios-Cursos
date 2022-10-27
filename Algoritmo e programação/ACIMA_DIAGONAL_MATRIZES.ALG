Algoritmo "acima_diagonal_matrizes"

Var
  m, n, i, j : inteiro
  mat : vetor [0..9, 0..9] de real
  soma : real

Inicio
   escreva("Qual a ordem da matriz? ")
   leia(m)

   para i de 0 ate m-1 faca
     para j de 0 ate m-1 faca
     escreva("Elemento [", i, ",", j, "]: ")
     leia(mat[i, j])
     fimpara
   fimpara
   escreval
   
   soma <- 0
   para i de 0 ate m-1 faca
        para j de i+1 ate m-1 faca
        soma <- soma + mat[i, j]
        fimpara
   fimpara
   
   escreval("SOMA DOS ELEMENTOS ACIMA DA DIAGONAL PRINCIPAL = ", soma)


Fimalgoritmo