#include <stdio.h>

int main ()
{
    double largura, comprimento, valor_metro, area, preco;

    printf("Digite a largura do terreno: ");
    scanf("%lf", &largura);
    printf("Digite o comprimento do terreno: ");
    scanf("%lf", &comprimento);
    printf("Digite o valor do metro quadrado: ");
    scanf("%lf", &valor_metro);

    area = 0;
    area = largura * comprimento;
    preco = 0;
    preco = area * valor_metro;

    printf("Area do terreno = %.2lf\n", area);
    printf("Preco do terreno = %.2lf\n", preco);

    return 0;
}
