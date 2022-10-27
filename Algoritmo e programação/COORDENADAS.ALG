Algoritmo "coordenadas"

Var
  x, y : real
  resposta : caractere

Inicio
    escreva("Valor de X ")
    leia(x)
    escreva("Valor de y ")
    leia(y)
    
    se (x > 0) e (y < 0)  entao
    resposta <- "Q4"
    senao
      se (x < 0) e (y > 0) entao
      resposta <- "Q2"
      senao
        se (x > 0) e (y > 0) entao
        resposta <- "Q1"
        senao
          se (x < 0) e (y < 0) entao
          resposta <- "Q3"
          senao
            se (x = 0) e (y = 0) entao
            resposta <- "Origem"
            senao
              se ((x < 0) ou (x > 0)) e (y = 0) entao
              resposta <- "Eixo X"
              senao
              resposta <- "Eixo Y"
              fimse
            fimse
          fimse
        fimse
      fimse
    fimse

    escreval(resposta)

Fimalgoritmo