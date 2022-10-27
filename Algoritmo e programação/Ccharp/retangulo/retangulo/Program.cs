// See https://aka.ms/new-console-template for more information

using System.Globalization;

CultureInfo CI = CultureInfo.InvariantCulture;

double bas, altura, area, perimetro, b, h, diametro;

Console.Write("Qual a base do retangulo: ");
bas = double.Parse(Console.ReadLine(), CI);
Console.Write("Qual a altura do retangulo: ");
altura = double.Parse(Console.ReadLine(), CI);

area = bas * altura;
perimetro = (2 * bas) + (2 * altura);
b = Math.Pow(bas, 2);
h = Math.Pow(altura, 2);
diametro = Math.Sqrt(b + h);

Console.WriteLine("O valor da area é: " + area.ToString("F2", CI));
Console.WriteLine("O valor do perímetro é: " + perimetro.ToString("F2", CI));
Console.WriteLine("O valor do diametro é: " + diametro.ToString("F2", CI));