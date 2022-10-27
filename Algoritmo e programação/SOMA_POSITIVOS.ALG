Algoritmo "soma_positivos"
// Disciplina   : [Algoritmo]
// Professor   : MARCOS ALVES MARIANO
// Descrição   : Soma apenas os numeros positivos digitados
// Autor(a)    : Renan Francisco Magalhães Gatti
// Data atual  : 19/10/2022
Var
soma, numero, i : inteiro



Inicio

soma <- 0
i <- 0

enquanto (i < 10) faca
    escreva("Digite um número inteiro positivo ou negativo:")
    leia(numero)
    se (numero > 0) entao
       se (numero % 2 = 0) entao
          soma <- soma + numero
       fimse
    fimse
    i <- i + 1
fimenquanto

escreva("A soma dos numeros positivos é: ", soma)


Fimalgoritmo