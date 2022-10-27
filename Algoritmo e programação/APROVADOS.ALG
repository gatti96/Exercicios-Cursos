Algoritmo "aprovados"

Var
      n, i : inteiro
       vet_nome : vetor [0..9] de caractere
       vet1 : vetor [0..9] de real
       vet2 : vetor [0..9] de real
       media : vetor [0..9] de real

Inicio
      escreva("Quantos alunos serao digitados? ")
      leia(n)
      
      para i de 0 ate n-1 faca
       escreva("Digite nome, primeira e segunda nota do ", i+1, "o aluno")
       leia(vet_nome[i])
       leia(vet1[i])
       leia(vet2[i])
      fimpara
      
      escreval
      
       para i de 0 ate n-1 faca
       media[i] <- (vet1[i] + vet2[i]) / 2
       fimpara
       
       para i de 0 ate n-1 faca
       se media[i] >= 6.0 entao
       escreval("Alunos aprovados:")
       escreval(vet_nome[i])
       fimse
       fimpara
      
Fimalgoritmo