Algoritmo "par_impar"

Var
   x, y, w : inteiro

Inicio

   escreva("Quantos numeros voce vai digitar? ")
   leia(x)
   y <- 0
   
   repita
      escreva("Digite um numero: ")
      leia(w)
        se w > 0 entao
        se w % 2 <> 0 entao
        escreval("IMPAR POSITIVO")
        senao
          escreval("PAR POSITIVO")
         fimse
        fimse
        
        se w < 0 entao
        se w % 2 <> 0 entao
        escreval("IMPAR NEGATIVO")
          senao
           se w % 2 = 0 entao
           escreval("PAR NEGATIVO")
           fimse
          fimse
        fimse

        se w = 0 entao
        escreval("NULO")
        fimse

        y <- y + 1
   ate y = x

Fimalgoritmo