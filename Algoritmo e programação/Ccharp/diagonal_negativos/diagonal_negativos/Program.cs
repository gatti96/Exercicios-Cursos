// See https://aka.ms/new-console-template for more information
using System.Globalization;

CultureInfo ci = CultureInfo.InvariantCulture;

int n, i, j, cont;

Console.Write("Qual a ordem da matriz: ");
n = int.Parse(Console.ReadLine());

int[,] mat = new int[n, n];

for (i = 0; i < n; i++)
{
    for (j = 0; j < n; j++)
    {
        Console.Write("Elemento [" + i + "," + j + "]: ");
        mat[i, j] = int.Parse(Console.ReadLine());
    }
}
Console.WriteLine();

Console.WriteLine("Diagonal Principal: ");
for (i = 0; i < n; i++)
{
    Console.Write(mat[i, i] + "  ");
}
Console.WriteLine();

cont = 0;
for (i = 0; i < n; i++)
{
    for (j = 0; j < n; j++)
    {
        if (mat[i, j] < 0)
        {
            cont = cont + 1;
        }
    }
}

Console.WriteLine("Quantidade de negativos: " + cont);
