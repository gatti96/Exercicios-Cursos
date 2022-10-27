#include <iostream>
#include <string.h>
#include <stdio.h>

int main() {
	int cont, x, soma;
	double media;
	
	printf("Digite as idades: ");
	scanf("%i", &x);
	
	soma = 0;
	cont = 0;
	media = 0;
	
	while (x >= 0) {
		soma = soma + x;
		cont = cont + 1;
		scanf("%i", &x);	
	}
	
	if (cont == 0) {
		printf("Impossivel calcular");
	}
	else {
		media = (float)soma / (float)cont;
		printf("Media %.2lf\n", media);	
	}
	
	return 0;
}
