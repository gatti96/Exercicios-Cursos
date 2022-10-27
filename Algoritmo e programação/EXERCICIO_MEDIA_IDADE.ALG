Algoritmo "exercicio_media_idade"

Var
   x, cont, soma : inteiro
   media : real

Inicio
   cont <- 0
   soma <- 0
   
   escreval("Digite as idades: ")
   leia(x)
   
   enquanto x >= 0 faca
            soma <- soma + x
            cont <- cont + 1
            
            leia(x)
   fimenquanto
   
   se cont = 0 então
   escreval("Impossível calcular")
   senao
   media <- soma / cont
   escreval("Média = ", media:4:2)
   fimse


Fimalgoritmo