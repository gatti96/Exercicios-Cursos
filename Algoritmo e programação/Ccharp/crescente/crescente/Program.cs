// See https://aka.ms/new-console-template for more information
using System.Globalization;

CultureInfo CI = CultureInfo.InvariantCulture;

int x, y;

Console.WriteLine("Digite dois numeros:");
x = int.Parse(Console.ReadLine());  
y = int.Parse(Console.ReadLine());  

Console.WriteLine();

while (x != y)
{
    if (x < y)
    {
        Console.WriteLine("Crescente.");
    }
    else
    {
        Console.WriteLine("Descrescente");
    }
    Console.WriteLine();
    Console.WriteLine("Digite dois numeros:");
    x = int.Parse(Console.ReadLine());
    y = int.Parse(Console.ReadLine());
}
