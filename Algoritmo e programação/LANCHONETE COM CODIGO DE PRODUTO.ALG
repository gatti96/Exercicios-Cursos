Algoritmo "lanchonete com codigo de produto"

Var
   quantidade, codigo : inteiro
    pv1, pv2, pv3, pv4, pv5, total, dinheiro, troco : real

Inicio
   pv1 <- 5.00
   pv2 <- 3.50
   pv3 <- 4.80
   pv4 <- 8.90
   pv5 <- 7.32
   
    escreva("Codigo do produto comprado: ")
   leia(codigo)
   escreva("Quantidade comprada: ")
   leia(quantidade)
   
     se codigo = 1 entao
     total <- quantidade * pv1
      escreval("O valor total é: R$", total:4:2)
         senao
         se codigo = 2 entao
         total <- quantidade * pv2
         escreval("O valor total é: R$", total:4:2)
            senao
            se codigo = 3 entao
            total <- quantidade * pv3
            escreval("O valor total é: R$", total:4:2)
               senao
               se codigo = 4 entao
               total <- quantidade * pv4
               escreval("O valor total é: R$", total:4:2)
                  senao
                  se codigo = 5 entao
                  total <- quantidade * pv5
                  escreval("O valor total é: R$", total:4:2)
                  fimse
               fimse
            fimse
         fimse
     fimse
     escreva("Valor em dinheiro: ")
     leia(dinheiro)
     troco <- dinheiro - total
     escreval("O valor do troco é: R$", troco)

Fimalgoritmo