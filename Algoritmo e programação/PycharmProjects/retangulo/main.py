import math

base = float(input("Qual a base do retangulo: "))
altura = float(input("Qual a altura do retangulo: "))

area = base * altura
perimetro = (2 * altura) + (2 * base)
b = (base**2)
h = (altura**2)
diametro = math.sqrt(b+h)

print(f"O valor da area é: {area:.2f}")
print(f"O valor do perímetro é: {perimetro:.2f}")
print(f"O valor do diametro é: {diametro:.2f}")