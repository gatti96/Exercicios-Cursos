Algoritmo "entrada_de_dados"

Var

    idade : inteiro
    salario1, salario2 : real
    nome : caractere

Inicio

         escreva("Digite seu nome: ")
         leia(nome)
         escreva("Qual sua idade: ")
         leia(idade)
         escreva("Qual o seu sal?rio no ?ltimo m?s: ")
         leia(salario1)
         escreva("Qual seu pen?ltimo sal?rio: ")
         leia(salario2)
         
         escreval("Dados digitados: ")
         escreval("Nome = ", nome)
         escreval("Sua idade ? ", idade, ".", "Seu ultimo sal?rio foi ", salario1, "e seu penultimo sal?rio foi ", salario2)
         escreval("A m?dia de seus sal?rios ?: ", (salario1 + salario2)/2, ".")

Fimalgoritmo