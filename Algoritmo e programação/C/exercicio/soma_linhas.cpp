#include <stdio.h>

int main() {
    int m, n, i, j;
	
	printf("Qual a quantidade de linhas da matriz: ");
	scanf("%i", &m);
	
	printf("Qual a quantidade de colunas da matriz: ");
	scanf("%i", &n);
	
	double mat[m][n];
	double vet[m];
	
	for (int i = 0; i < m; i++) {
		printf("Digite os elementos da %ia. linha: \n", i+1);
		for (int j = 0; j < n; j++) {
			scanf("%lf", &mat[i][j]);
		}
	}
	
	for (i = 0; i < m; i++) {
		vet[i] = 0;
		for (int j = 0; j < n; j++) {
			vet[i] = vet [i] + mat[i][j];
		}
	}
	
	printf("\n Vetor gerado: \n");
	for (int i = 0; i < m; i++) {
		printf("%.1lf\n", vet[i]);
	}
	
	return 0;
}
