print("Digite dois numeros: ")
x = int(input())
y = int(input())

soma = 0

if y < x:
    troca = x
    x = y
    y = troca

for i in range(x+1, y-1):
    if i % 2 != 0:
        soma = soma + i

print(f"A soma dos impares é: {soma}.")
