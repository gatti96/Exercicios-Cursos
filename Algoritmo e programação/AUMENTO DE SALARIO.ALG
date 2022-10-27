Algoritmo "aumento de salario"

Var
      salario, newpay, aumento : real

Inicio
     escreva("Digite o salario da pessoa: ")
     leia(salario)
     
     se salario <= 1000 entao
     aumento <- (salario * 20) / 100
     newpay <- salario + aumento
     escreval("Novo salário: R$", newpay)
     escreval("Aumento de R$", aumento)
     escreval("Porcentagem de 20%")
         senao
         se (salario > 1000) e (salario <= 3000)entao
         aumento <- (salario * 15) / 100
         newpay <- salario + aumento
         escreval("Novo salário: R$", newpay)
         escreval("Aumento de R$", aumento)
           senao
           se (salario > 3000) e (salario <= 8000)entao
           aumento <- (salario * 10) / 100
           newpay <- salario + aumento
           escreval("Novo salário: R$", newpay)
           escreval("Aumento de R$", aumento)
             senao
             se salario > 8000 entao
             aumento <- (salario * 5) / 100
             newpay <- salario + aumento
             escreval("Novo salário: R$", newpay)
             escreval("Aumento de R$", aumento)
             fimse
          fimse
        fimse
     fimse
     

Fimalgoritmo