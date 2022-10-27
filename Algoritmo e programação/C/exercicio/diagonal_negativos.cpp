#include <stdio.h>
#include <string.h>

int main() {
	int n, i, j, negativo;
	
	printf("Qual a ordem da matriz: ");
	scanf("%i", &n);
	
	int mat[n][n];
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			printf("Elemento [%i,%i]: ", i, j);
			scanf("%i", &mat[i][j]);
		}
	}
	
	printf("\n Diagonal Principal: \n");
	
	for (int i = 0; i < n; i++) {
		printf("%i  ", mat[i][i]);
	}
	
	negativo = 0;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			if (mat[i] [j] < 0) {
				negativo = negativo + 1;
			}
		}
	}
	
	printf("\nQuantidade de numeros negativos: %i\n", negativo);
	
	return 0;
}
