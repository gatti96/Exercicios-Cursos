Algoritmo "retangulo"

Var
   base, altura, area, perimetro, b, h, diametro : real

Inicio
     escreva("Qual a base do retangulo: ")
     leia(base)
     escreva("Qual a altura do retangulo: ")
     leia(altura)
     area <- base * altura
     perimetro <- (2 * base) + (2 * altura)
     b <-  Exp(base, 2)
     h <- Exp(altura, 2)
     diametro <- RaizQ(b + h)
     escreva("O valor da area é: ", area, " e o valor do perímetro é: ", perimetro:6:6)
     escreva("O valor do diametro é: ", diametro)
     

Fimalgoritmo