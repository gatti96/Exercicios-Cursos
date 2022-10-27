#include <iostream>
#include <stdio.h>
#include <string.h>

int main() {
	int n, i;
	
	printf("Quantos numeros voce vai digitar? ");
	scanf("%i", &n);
	
	double vet[n];
	
	for (i = 0; i < n; i++) {
		printf("Escreva um numero: ");
		scanf("%lf", &vet[i]);
	}
	
	printf("\n");
	printf("Numeros negativos digitados \n");
	
	for (i = 0; i < n; i++) {
		if (vet[i] < 0) {
			printf("%.0lf\n", vet[i]);
		}
	}
	
	return 0;
}
