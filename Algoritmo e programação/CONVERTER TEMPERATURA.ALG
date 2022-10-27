Algoritmo "converter temperatura"

Var
     C, F : real
     unidade : caractere

Inicio
   escreva("digite a escala (C/F) ")
   leia(unidade)
   
   se unidade = "F" entao
       escreva("digite a temperatura em  Fahrenheit: ")
       leia(F)
       C <- 5 / 9 *(F - 32)
       escreval(" A temperatura em Celsius é: ", C:4:2)
   senao
      escreva("digite a temperatura em  Celsius: ")
       leia(C)
       F <- 9 * C / 5 + 32
       escreval(" A temperatura em Fahrenheit é: ", F:4:2)
   fimse
       

Fimalgoritmo