Algoritmo "menor_de_tres"
// Disciplina   : [Algoritmos]
// Professor   : MARCOS ALVES MARIANO
// Descrição   : Programa que informa o menor de três numeros digitados
// Autor(a)    : Renan Francisco Magalhães Gatti
// Data atual  : 20/10/2022

Var
numero1, numero2, numero3 : inteiro


Inicio
escreva("Digite o primeiro numero: ")
leia(numero1)

escreva("Digite o segundo numero: ")
leia(numero2)

escreva("Digite o terceiro numero: ")
leia(numero3)

se (numero1 < numero2) e (numero1 < numero3) entao
   escreva("O menor numero é o ", numero1)
   senao
        se (numero2 < numero3) entao
           escreva("O menor numero é o ", numero2)
           senao
                escreva("O menor numero é o ", numero3)
        fimse
fimse

Fimalgoritmo