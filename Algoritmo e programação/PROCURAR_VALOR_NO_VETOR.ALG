Algoritmo "procurar_valor_no_vetor"
// Disciplina   : [Algoritmo]
// Professor   : MARCOS ALVES MARIANO
// Descrição   : procura um valor no vetor
// Autor(a)    : Renan Francisco Magalhães Gatti
// Data atual  : 21/10/2022
Var
vet : vetor [0..9] de inteiro
i, x, contar : inteiro

Inicio
i <- 0
x <- 0
contar <- 0

para i de 0 ate 9 faca
     escreva("Digite um numero: ")
     leia(vet[i])
fimpara

escreva("Qual numero deseja saber se existe no vetor:")
leia (x)

para i de 0 ate 9 faca
     se vet[i] = x entao
        contar <- contar + 1
     fimse
fimpara

se contar > 0 entao
   escreval("O numero ", x, " repete ", contar, " vezes no vetor")
   senao
        escreval("O numero", x, " não existe no vetor")
fimse

Fimalgoritmo