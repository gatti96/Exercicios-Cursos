Algoritmo "vetores_alturas"

Var
  n, i, porcentagem1 : inteiro
  altura, media_altura, resul_porcen : real
  vet_idade : vetor [0..9] de inteiro
    vet_alt : vetor [0..9] de real
  vet_nome : vetor [0..9] de caractere

Inicio
        escreva("Quantas pessoas serão digitadas? ")
        leia(n)
        
        para i de 0 ate n-1 faca
        escreval("Dados da ", i+1, "a pessoa: ")
        escreval("Nome: ")
        leia(vet_nome[i])
        escreval("Idade: ")
        leia(vet_idade[i])
        escreval("Altura: ")
        leia(vet_alt[i])
        fimpara
        
        altura <- 0
        para i de 0 ate n-1 faca
        altura <- altura + vet_alt[i]
        fimpara
        
        media_altura <- altura / n
        
        porcentagem1 <- 0
        para i de 0 ate n-1 faca
        se vet_idade[i] < 16 entao
        porcentagem1 <- porcentagem1 + 1)
        fimse
        fimpara
         resul_porcen <- (porcentagem1 * 100) / n
        
        escreval
        escreval("Altura média: ", media_altura:8:2)
        escreval("Pessoas com menos de 16 anos: ", resul_porcen:8:2, "%")
        para i de 0 ate n-1 faca
        se vet_idade[i] < 16 entao
        escreval(vet_nome[i])
        fimse
        fimpara
        

Fimalgoritmo