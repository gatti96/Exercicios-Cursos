#include <iostream>
#include <stdio.h>
#include <string.h>

int main() {
	
	int x, y;
	
	printf("Digite dois numeros: \n");
	scanf("%i", &x);
	scanf("%i", &y);
	
	while (x != y) {	
	if (x < y) {
		printf("Crescente\n");
	}
	else {
		printf("Decrescente\n");
	}
	printf("Digite outros dois numeros: \n");
	scanf("%i", &x);
	scanf("%i", &y);
	}
	
	return 0;
}
