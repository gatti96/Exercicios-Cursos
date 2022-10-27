Algoritmo "distancia maior"

Var
  d1, d2, d3 : real

Inicio
     escreval("Digite as três distâncias")
     leia(d1)
     leia(d2)
     leia(d3)
     
     se (d1 > d2) e (d1 > d3) entao
      escreval("A distância maior é ", d1:4:2)
      senao
       se d2 > d3 entao
       escreval("A distância maior é ", d2:4:2)
        senao
        escreval("A distância maior é ", d3:4:2)
       fimse
     fimse


Fimalgoritmo