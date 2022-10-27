Algoritmo "dados_pessoas"

Var
      n, i, quanti_femi, quanti_homem : inteiro
       genero : vetor [0..9] de caractere
       altura : vetor [0..9] de real
       menor, maior, media : real


Inicio
      escreva("Quantas pessoas serao digitadas? ")
      leia(n)
      
      para i de 0 ate n-1 faca
       escreva("Altura da ", i+1, "a pessoa: ")
       leia(altura[i])
      escreva("Genero da ", i+1, "a pessoa (F ou M: ")
       leia(genero[i])
      fimpara
      
      escreval
      menor <- 0
      maior <- 0
      para i de 0 ate n-1 faca
      menor <- altura[i]
      maior <- altura[i]
      fimpara
      
      para i de 0 ate n-1 faca
      se menor > altura[i] entao
      menor <- altura[i]
      fimse
      se maior < altura[i] entao
      maior <- altura[i]
      fimse
      fimpara
      
      media <- 0
      quanti_femi <- 0
      
      para i de 0 ate n-1 faca
      se genero[i] = "F" entao
      media <- media + altura[i]
      quanti_femi <- quanti_femi + 1
      fimse
      fimpara

      media <- media / quanti_femi
      
      quanti_homem <- 0
      
      para i de 0 ate n-1 faca
      se genero[i] = "M" entao
      quanti_homem <- quanti_homem + 1
      fimse
      fimpara
      
      escreval("Menor altura = ", menor)
      escreval("Maior altura = ", maior)
      escreval("Media das alturas das mulheres = ", media:8:3)
      escreval("Numero de homens = ", quanti_homem)
      
Fimalgoritmo