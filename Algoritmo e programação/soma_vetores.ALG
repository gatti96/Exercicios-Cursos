Algoritmo "maior_posicao"

Var
  n, i, soma : inteiro
  vet1 : vetor [0..9] de inteiro
  vet2 : vetor [0..9] de inteiro
  vet3 : vetor [0..9] de inteiro

Inicio
    escreva("Quantos valores vai ter cada vetor? ")
    leia(n)
    
    para i de 0 ate n-1 faca
    escreva("Digite os valores do vetor A: ")
    leia(vet1[i])
    fimpara
    
    para i de 0 ate n-1 faca
    escreva("Digite os valores do vetor B: ")
    leia(vet2[i])
    fimpara
    
    soma <-0
    para i de 0 ate n-1 faca
    soma <-  vet1[i] + vet2[i]
    vet3[i] <- soma
    soma <- 0
    fimpara
    
    escreval
    escreval("VETOR RESULTANTE:")
    para i de 0 ate n-1 faca
    escreval(vet3[i])
    fimpara



Fimalgoritmo