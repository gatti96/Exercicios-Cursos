// See https://aka.ms/new-console-template for more information
using System.Globalization;

CultureInfo CI = CultureInfo.InvariantCulture;

int x, y, z;

Console.Write("Primeiro Valor: ");
x = int.Parse(Console.ReadLine());
Console.Write("Segudo valor: ");
y = int.Parse(Console.ReadLine());
Console.Write("Terceiro valor: ");
z = int.Parse(Console.ReadLine());  

if (x < y && x < z)
{
    Console.WriteLine("O menor valor é " + x);
}
else if (y < z)
{
    Console.WriteLine("O menor valor é " + y);
}
else
{
    Console.WriteLine("O menor valor é " + z); 
}
