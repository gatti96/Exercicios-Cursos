// See https://aka.ms/new-console-template for more information
using System.Globalization;

CultureInfo CI = CultureInfo.InvariantCulture;

int x, y, soma, troca;

Console.WriteLine("Digite dois numeros:");
x = int.Parse(Console.ReadLine());  
y = int.Parse(Console.ReadLine());

if (x > y)
{
    troca = x;
    x = y;
    y = troca;
}
soma = 0;


    for (int i = x+1; i < y; i++)
    {
        if (i % 2 != 0)
        {
            soma = soma + i;
        }
    }
    Console.WriteLine("O valor da soma dos impares é: " + soma);
