Algoritmo "glicose"


Var
   glicose : real


Inicio
      escreva("Valor da glicose: ")
      leia(glicose)
      
      se glicose <= 100 então
      escreval("Classificação: Normal.")
      senao
      se (glicose > 100) e  (glicose <= 140) entao
       escreval("Classificação: Elevado.")
       senao
        se glicose > 140 entao
        escreval("Classificação: Diabetes.")
       fimse
      fimse
      fimse




Fimalgoritmo