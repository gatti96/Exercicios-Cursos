Algoritmo "media_pares"

Var
  n, i, x : inteiro
  vet1 : vetor [0..9] de inteiro
  media : real


Inicio
    escreva("Quantos elementos vai ter o vetor? ")
    leia(n)
    
    para i de 0 ate n-1 faca
    escreva("Digite um numero: ")
    leia(vet1[i])
    fimpara
    escreval
    
       media <- 0
       x <- 0
    para i de 0 ate n-1 faca
    se vet1[i] % 2 = 0 entao
    media <- media + vet1[i]
    x <- x + 1
    fimse
    fimpara
    
    se x = 0 entao
    escreva("Nenhum numero par digitado.")
     senao
         media <- media / x
     escreva("MEDIA DOS PARES = ", media:8:4)
    fimse
    



Fimalgoritmo