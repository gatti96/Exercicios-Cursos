Algoritmo "fatorial"

Var
    x, cobaias, total_cobaias, rato, cobra, sapo, i : inteiro
    tip : caractere
    percentual_cobra, percentual_sapo, percentual_rato : real

Inicio
   escreva("Quantos casos de teste serao digitados? ")
   leia(x)
   total_cobaias <- 0
   rato <- 0
   cobra <- 0
   sapo <- 0
   
      para i de 1 ate x faca
        escreva("Quantidade de cobaias: ")
        leia(cobaias)
        total_cobaias <- total_cobaias + cobaias
        escreva("Tipo de cobaia: (R, S, C) ")
        leia(tip)
          se tip = "R" entao
          rato <- rato + cobaias
            senao
            se tip = "S" entao
            sapo <- sapo + cobaias
            senao
            cobra <- cobra + cobaias
            fimse
          fimse
      fimpara

percentual_cobra <- (cobra * 100) / total_cobaias
percentual_sapo <- (sapo * 100) / total_cobaias
percentual_rato <- (rato * 100) / total_cobaias
      
   escreval("RELATORIO FINAL: ")
   escreval("Total: ", total_cobaias, " cobaias")
   escreval("Total de cobras: ", cobra)
   escreval("Toral de sapos: ", sapo)
   escreval("Total de ratos: ", rato)
   escreval("Percentual de cobras: ", percentual_cobra)
   escreval("Percentual de sapos: ", percentual_sapo)
   escreval("Percentual de ratos: ", percentual_rato)


Fimalgoritmo