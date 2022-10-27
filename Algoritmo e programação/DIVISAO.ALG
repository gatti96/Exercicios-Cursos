Algoritmo "divisao"

Var
 x, y, w, i : inteiro
 resultado : real

Inicio

   escreva("Quantos casos voce vai digitar? ")
   leia(x)
   
   para i de 1 ate x faca
   escreva("Entre com o numerador: ")
   leia(y)
   escreva("Entre com o denominador: ")
   leia(w)
      se w = 0 entao
      escreval("DIVISAO IMPOSSIVEL")
        senao
          resultado <- y / w
          escreval("DIVISAO = ", resultado)
      fimse
   fimpara


Fimalgoritmo