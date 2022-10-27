Algoritmo "exercicio_cescente"

Var
   x, y : inteiro


Inicio
    escreval("Digite dois numeros: ")
    leia(x)
    leia(y)
    
    se x < y entao
    escreval("CRESCENTE!")
    senao
    escreval("DECRESCENTE!")
    fimse

      enquanto x <> y faca
       escreval("Digite outros dois numeros: ")
       leia(x)
       leia(y)
          se x < y entao
          escreval("CRESCENTE!")
          senao
          escreval("DECRESCENTE!")
          fimse
      fimenquanto

Fimalgoritmo