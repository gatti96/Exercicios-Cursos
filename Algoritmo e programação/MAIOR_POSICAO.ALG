Algoritmo "maior_posicao"

Var
  n, i, maior, posicao : inteiro
  vet : vetor [0..9] de inteiro

Inicio
    escreva("Quanto numeros voce vai digitar? ")
    leia(n)
    
    para i de 0 ate n-1 faca
    escreva("Digite um numero: ")
    leia(vet[i])
    fimpara
    
    maior <- 0
    posicao <- 0
    
    para i de 0 ate 0 faca
      maior <- vet[i]
    fimpara
    
    para i de 0 ate n-1 faca
      se maior < vet[i] entao
      maior <- vet[i]
      posicao <- i
      fimse
    fimpara
    
    escreval("MAIOR VALOR = ", maior)
    escreval("POSICAO DO MAIOR VALOR = ", posicao)


Fimalgoritmo