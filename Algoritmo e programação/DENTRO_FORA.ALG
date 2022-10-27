Algoritmo "dentro_fora"


Var
    x, y, w, dentro, fora: inteiro

Inicio
      escreva("Quantos numeros voce vai digitar? ")
      leia(x)
      y <- 0
      dentro <- 0
      fora <- 0
      
      repita
       escreva("Digite um numero: ")
       leia(w)
         se (w >= 10) e (w <= 20) entao
         dentro <- dentro + 1
         senao
         fora <-  fora + 1
         fimse
       y <- y + 1
      ate y = x
      
      escreval(dentro, " DENTRO ")
      escreval(fora, " FORA ")

Fimalgoritmo