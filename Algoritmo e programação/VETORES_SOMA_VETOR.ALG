Algoritmo "vetores_soma_vetor"

Var
  n, i : inteiro
  soma, media : real
  vet : vetor [0..9] de real

Inicio
        escreva("Quantos numeros voce vai digitar? ")
        leia(n)
        
        soma <-0
        
        para i de 0 ate n-1 faca
           escreva("Digite um numero: ")
           leia(vet[i])
        fimpara
        
        escreval
        escreva("Valores ")
        para i de 0 ate n-1 faca
          escreva(vet[i]:8:1)
          soma <- soma + vet[i]
        fimpara
        escreval
        
        media <- soma / n
        
        escreval("SOMA : ", soma:8:1)
        escreval("MEDIA: ", media:8:1)

Fimalgoritmo