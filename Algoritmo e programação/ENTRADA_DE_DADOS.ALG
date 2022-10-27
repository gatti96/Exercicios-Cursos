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
         escreva("Qual o seu salário no último mês: ")
         leia(salario1)
         escreva("Qual seu penúltimo salário: ")
         leia(salario2)
         
         escreval("Dados digitados: ")
         escreval("Nome = ", nome)
         escreval("Sua idade é ", idade, ".", "Seu ultimo salário foi ", salario1, "e seu penultimo salário foi ", salario2)
         escreval("A média de seus salários é: ", (salario1 + salario2)/2, ".")

Fimalgoritmo