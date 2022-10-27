// See https://aka.ms/new-console-template for more information
using System.Globalization;

CultureInfo ci = CultureInfo.InvariantCulture;

int x, mult;

Console.Write("Qual tabuada: ");
x = int.Parse(Console.ReadLine());  

for (int i = 0; i <= 10; i++)
{
    mult = x * i;
    Console.WriteLine(x + " X " + i + " = " + mult);
}
