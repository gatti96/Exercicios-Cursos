// See https://aka.ms/new-console-template for more information
using System.Globalization;

CultureInfo ci = CultureInfo.InvariantCulture;

int n, i;
double soma, media;

Console.Write("Qual a ordem do vetor: ");
n = int.Parse(Console.ReadLine());

double[] vet = new double[n];

for (i = 0; i < n; i++)
{
    Console.Write("Digite um numero: ");
    vet[i] = double.Parse(Console.ReadLine(), ci);
}
Console.WriteLine();

Console.Write("Valores: ");
for (i = 0; i < n; i++)
{
    Console.Write(vet[i].ToString("F1", ci) + "  ");
}
Console.WriteLine();

soma = 0;
for (i = 0; i < n; i++)
{
    soma = soma + vet[i];
}
Console.WriteLine("Soma dos valores: " + soma.ToString("F1", ci));

media = soma / (double)n;

Console.WriteLine("Media: " + media.ToString("F1", ci));