// See https://aka.ms/new-console-template for more information
using System.Globalization;

Console.WriteLine("Ola Mundo!");

double x;
x = 4.456789;
Console.WriteLine(x.ToString("F2", CultureInfo.InvariantCulture));
