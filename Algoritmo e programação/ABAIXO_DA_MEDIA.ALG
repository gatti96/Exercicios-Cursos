Algoritmo "abaixo_da_media"

Var
  n, i : inteiro
  vet1 : vetor [0..9] de real
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
    para i de 0 ate n-1 faca
    media <- media + vet1[i]
    fimpara

    media <- media / n
    
    escreval("MEDIA DO VETOR = ", media:8:3)
    para i de 0 ate n-1 faca
    se vet1[i] < media entao
    escreval(vet1[i])
    fimse
    fimpara


Fimalgoritmo