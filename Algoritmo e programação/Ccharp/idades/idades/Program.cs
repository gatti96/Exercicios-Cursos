// See https://aka.ms/new-console-template for more information

using System.Globalization;

CultureInfo CI = CultureInfo.InvariantCulture;

string nome1, nome2;
int idade1, idade2;
double media;

Console.WriteLine("Dados da primeira pessoa: ");
Console.Write("nome: ");
nome1 = Console.ReadLine();
Console.Write("Idade: ");
idade1 = int.Parse(Console.ReadLine());
Console.WriteLine();
Console.WriteLine("Dados da segunda pessoa: ");
Console.Write("Nome: ");
nome2 = Console.ReadLine();
Console.Write("Idade: ");
idade2 = int.Parse(Console.ReadLine());
Console.WriteLine();

media = ((double)idade1 + (double)idade2) / 2;

Console.WriteLine("A média da idade de " + nome1 + " e de " + nome2 + " é de " + media.ToString("F2", CI) + " anos.");