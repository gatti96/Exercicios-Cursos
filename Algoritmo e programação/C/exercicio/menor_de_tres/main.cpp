#include <iostream>
#include <stdio.h>
#include <string.h>

void limpar_entrada() { 
 char c; 
 while ((c = getchar()) != '\n' && c != EOF) {} 
} 

int main(int argc, char** argv) {
	
	int x, y, z, menor;
	
	printf("Primeiro valor: ");
	scanf("%i", &x);
	printf("Segundo valor: ");
	limpar_entrada(); 
	scanf("%i", &y);
	printf("Terceiro valor: ");
	limpar_entrada(); 
	scanf("%i", &z);
	
	
	
	if (x < y && x < z) {
		printf("MENOR = %i", x);
	}
	else if (y < z){
		printf("MENOR = %i", y);
	}
	else {
		printf("MENOR = %i", z);
	}

	return 0;
}
