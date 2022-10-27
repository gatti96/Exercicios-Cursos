Algoritmo "fatorial"

Var
   n, conta, cont, fatorial : inteiro

Inicio

   escreva("Digite o valor de N: ")
   leia(n)
   
   se n <= 1 entao
   escreval("Fatorial = 1")
   n <- 0
   senao
   conta <- n
   cont <- conta - 1
   fatorial <- n * cont
   n <- cont - 1      2
   
   enquanto n > 0 faca
     fatorial <- fatorial * n
     n <- n -1
   fimenquanto
      escreval("FATORIAL =", fatorial)
   fimse
   



Fimalgoritmo