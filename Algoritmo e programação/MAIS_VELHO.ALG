Algoritmo "mais_velho"

Var
         n, i, maior : inteiro
       vet1 : vetor [0..9] de inteiro
       vet2 : vetor [0..9] de caractere
       nome : caractere


Inicio
      escreva("Quantas pessoas voce vai digitar? ")
      leia(n)
      
      para i de 0 ate n-1 faca
      escreval("Dados da ", i+1, "a pessoa")
      escreva("Nome: ")
      leia(vet2[i])
      escreva("Idade: ")
      leia(vet1[i])
      fimpara
      
      maior <- 0
      
      para i de 0 ate 0 faca
      maior <- vet1[i]
      fimpara
      
      para i de 0 ate n-1 faca
      se maior < vet1[i] entao
      maior <- vet1[i]
      nome <- vet2[i]
      fimse
      fimpara
      
      escreval
      escreval("PESSOA MAIS VELHA: ", nome)
      
Fimalgoritmo