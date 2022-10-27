Algoritmo "matriz_geral_matrizes"

Var
  m, n, i, j, coluna : inteiro
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
     para j de 0 ate m-1 faca
          se mat[i, j] > 0 entao
             soma <- soma + mat[i, j]
          fimse
     fimpara
   fimpara
   
   escreval("SOMA DOS POSITIVOS: ", soma)
   escreval
   
   escreva("Escolha uma linha: ")
   leia(n)
   escreva("LINHA ESCOLHIDA: ")
   
   para j de 0 ate m-1 faca
   escreva(mat[n, j]:3:1, "  ")
   fimpara
   escreval
   escreval
   
   escreva("Escolha uma coluna: ")
   leia(coluna)
   escreva("COLUNA ESCOLHIDA: ")
   para i de 0 ate m-1 faca
   escreva(mat[i, coluna]:3:1, "  ")
   fimpara
   escreval
   escreval
   
   escreva("DIAGONAL PRINCIPAL ")
   para i de 0 ate m-1 faca
    escreva(mat[i, i]:4:1, "  ")
   fimpara
   escreval
   escreval
   
   para i de 0 ate m-1 faca
     para j de 0 ate m-1 faca
         se mat[i, j] < 0 entao
         mat[i, j] <- mat[i, j] * mat[i, j]
         fimse
     fimpara
   fimpara
   
   escreval("MATRIZ ALTERADA: ")
   para i de 0 ate m-1 faca
     para j de 0 ate m-1 faca
     escreva(mat[i, j]:4:1, "  ")
     fimpara
     escreval
   fimpara


Fimalgoritmo