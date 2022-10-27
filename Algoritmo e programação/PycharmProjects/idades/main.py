print("Dados da primeira pessoa:")
nome1 = input("Nome: ")
idade1 = int(input("Idade: "))
print()

print("Dados da segunda pessoa:")
nome2 = input("Nome: ")
idade2 = int(input("Idade: "))
print()

media = (float(idade1) + float(idade2)) / 2
print(f"A idade média de {nome1} e {nome2} é de {media} anos.")
