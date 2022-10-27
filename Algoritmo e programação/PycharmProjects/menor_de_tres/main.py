x = int(input("Primeiro valor: "))
y = int(input("Segundo valor: "))
a = int(input("Terceiro valor: "))

if x < y and x < a:
    print(f"Menor = {x}")
elif y < a:
    print(f"Menor = {y}")
else:
    print(f"Menor = {a}")

