Algoritmo "(matriz)diagonal_negativos"

Var
  n, i, j, negativo : inteiro
  mat : vetor [0..9, 0..9] de inteiro


Inicio

   escreva("Qual a ordem da matriz? ")
   leia(n)
   
   para i de 0 ate n-1 faca
      para j de 0 ate n-1 faca
      escreva("Elemento [", i, ",", j, "]: ")
      leia(mat[i, j])
      fimpara
   fimpara
   
   escreval
   
     para i de 0 ate n-1 faca
      para j de 0 ate n-1 faca
      se mat[i, j] =  mat[0, 0] entao
      escreva(mat[i, j], "  ")
        senao
        se mat[i, j] =  mat[1, 1] entao
        escreva(mat[i, j], "  ")
           senao
           se mat[i, j] =  mat[2, 2] entao
           escreva(mat[i, j], "  ")
           fimse
        fimse
      fimse
      fimpara
   fimpara
   
   escreval
   negativo <- 0
   para i de 0 ate n-1 faca
      para j de 0 ate n-1 faca
        se mat[i, j] < 0 entao
        negativo <- negativo +1
        fimse
      fimpara
   fimpara
   
   escreva("QUANTIDADE DE NEGATIVOS = ", negativo)

Fimalgoritmo