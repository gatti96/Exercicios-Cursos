#include <stdio.h>
#include <string.h>
#include <math.h>

int main() {
    double base, altura, area, perimetro, b, h, diametro;

    printf("Base do retangulo: ");
    scanf("%lf", &base);

    printf("Altura do retangulo: ");
    scanf("%lf", &altura);

    area = base * altura;
    perimetro = (2 * base) + (2 * altura);
    b = pow(base, 2);
    h = pow(altura, 2);
    diametro = sqrt(b + h);

    printf("AREA = %.2lf\n", area);
    printf("PERIMETRO = %.2lf\n", perimetro);
    printf("DIAGONAL = %.2lf\n", diametro);

    return 0;
}
