Algoritmo "tempo_de_jogo"

Var
    h1, final, hora_total : inteiro

Inicio
   escreva("Hora inicial do jogo: ")
   leia(h1)
    escreva("Hora final do jogo: ")
   leia(final)
   
   se h1 < final entao
   hora_total <- final - h1
   senao
     se (h1 > final) entao
     hora_total <- (final + 24)- h1
       senao
       se (h1 = 0) e (final = 0) entao
       hora_total <- 24
       fimse
     fimse
   fimse
   escreval("O jogo durou ", hora_total, " horas")


Fimalgoritmo