#include <iostream>
#include <stdio.h>
#include <string.h>

int main() {
	int n, i, soma;
	double media;
	
	printf("Quantos numeros voce vai digitar? ");
	scanf("%i", &n);
	
	double vet[n];
	
	for (i = 0; i < n; i++) {
		printf("Escreva um numero: ");
		scanf("%lf", &vet[i]);
	}
	
	printf("\nValores: \n");
	for (i = 0; i < n; i++) {
		printf("%.1lf  ", vet[i]);
	}
	
	soma = 0;
	for (i = 0; i < n; i++) {
	   soma = soma + vet[i];
	}
	
	printf("\nSoma: %i\n", soma);
	
	media = (float)soma / (float)n;
	
	printf("Media: %.2lf", media);
	
	return 0; 	
}
