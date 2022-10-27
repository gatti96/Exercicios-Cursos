#include <stdio.h>
#include <string.h>
#include <math.h>

int main() {
	double a, b, c, delta, x1, x2;
	
	printf("Digite o valor do coeficiente A: ");
    scanf("%lf", &a);
    printf("Digite o valor do coeficiente B: ");
    scanf("%lf", &b);
    printf("Digite o valor do coeficiente C: ");
    scanf("%lf", &c);
    
    delta = pow(b, 2) - (4 * a *c);
    
    if (a == 0 || delta < 0) {
    	printf("Esta equação não possui raízes reais. ");
	}
	else {
		x1 = (-b + sqrt(delta))/ (2 * a);
		x2 = (-b - sqrt(delta)) / (2 * a);
		printf("X1 =  %.2lf\n", x1);
        printf("X2 = %.2lf\n", x2);
	}
	
		
	return 0;
}
