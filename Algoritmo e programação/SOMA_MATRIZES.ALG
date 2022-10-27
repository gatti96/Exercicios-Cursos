Algoritmo "soma_matrizes"

Var
  m, n, i, j : inteiro
  mat1 : vetor [0..9, 0..9] de real
  mat2 : vetor [0..9, 0..9] de real
  mat3 : vetor [0..9, 0..9] de real

Inicio
   escreva("Quantas linhas vai ter cada matriz? ")
   leia(m)
   escreva("Quantas colunas vai ter cada matriz? ")
   leia(n)
   
   escreval("Digite os valores da matriz A: ")
   
   para i de 0 ate m-1 faca
     para j de 0 ate n-1 faca
     escreva("Elemento [", i, ",", j, "]: ")
     leia(mat1[i, j])
     fimpara
   fimpara
   
      escreval("Digite os valores da matriz B: ")
     para i de 0 ate m-1 faca
        para j de 0 ate n-1 faca
        escreva("Elemento [", i, ",", j, "]: ")
        leia(mat2[i, j])
        fimpara
     fimpara
     
     para i de 0 ate m-1 faca
        para j de 0 ate n-1 faca
        mat3[i, j] <- (mat1[i, j]) + (mat2[i, j])
        fimpara
     fimpara
     escreval
     escreval("MATRIZ SOMA: ")
     para i de 0 ate m-1 faca
          para j de 0 ate n-1 faca
          escreva(mat3[i, j], "  ")
          fimpara
          escreval
     fimpara

Fimalgoritmo