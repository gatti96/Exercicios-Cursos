Algoritmo "distancia maior"

Var
  d1, d2, d3 : real

Inicio
     escreval("Digite as tr?s dist?ncias")
     leia(d1)
     leia(d2)
     leia(d3)
     
     se (d1 > d2) e (d1 > d3) entao
      escreval("A dist?ncia maior ? ", d1:4:2)
      senao
       se d2 > d3 entao
       escreval("A dist?ncia maior ? ", d2:4:2)
        senao
        escreval("A dist?ncia maior ? ", d3:4:2)
       fimse
     fimse


Fimalgoritmo