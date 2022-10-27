Algoritmo "cada_linha_matriz"

Var
   m, i, j : inteiro
   mat: vetor [0..9, 0..9] de real
   maior: real

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
    escreval("MAIOR ELEMENTO DE CADA LINHA: ")

   maior <- 0
    para i de 0 ate m-1 faca
      maior <- mat[i, 0]
      para j de 1 ate m-1 faca
      se mat[i, j] > maior entao
        maior <-  mat[i, j]
      fimse
      fimpara
      
      escreval(maior)
    fimpara


Fimalgoritmo