#include <iostream>
#include <stdio.h>
#include <string.h>

int main() {
	int x, y, troca, soma, i;
	
	printf("Digite dois Numeros: ");
	scanf("%i", &x);
	scanf("%i", &y);
	
	if (x > y) {
		troca = x;
		x = y;
		y = troca;
	}
	
	soma = 0;
	
	for (i = x+1; i < y-1; i++) {
		if (i % 2 != 0) {
			soma = soma + i;
		}
	}
	
	printf("Soma dos impares = %i", soma);
		
	return 0;
}
