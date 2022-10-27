#include <stdio.h>
#include <string.h>

 void limpar_entrada() { 
 char c; 
 while ((c = getchar()) != '\n' && c != EOF) {} 
}

int main() {
	int n, i, cont;
	double soma, media, porcentagem;
	
	printf("Quantas pessoas serao digitadas? ");
	scanf("%i", &n);
	
	char vetor_nome[n][50];
	int vetor_idade[n];
	double vetor_altura[n];
	
	for (i = 0; i < n; i++) {
		printf("Dados da %ia pessoa: \n", i+1);
		printf("Nome: ");
		limpar_entrada(); 
		gets(vetor_nome[i]);
		printf("Digite a idade: ");
		limpar_entrada(); 
		scanf("%i", &vetor_idade[i]);
		printf("Digite a altura: ");
		limpar_entrada(); 
		scanf("%lf", &vetor_altura[i]);
	}
	
	soma = 0;
	
	for (i = 0; i < n; i++) {
		soma = soma + vetor_altura[i];
	}
	
	media = soma / n;
	
	printf("Media das alturas: %.2lf\n", media);
	
	cont = 0;
	
	for (i = 0; i < n; i++) {
		if (vetor_idade[i] < 16) {
			cont = cont + 1;
		}
	}
	
	porcentagem = ((float)cont * 100) / (float)n;
	
	printf("Pessoas com menos de 16 anos: %.2lf %%\n", porcentagem);
	
	for (i = 0; i < n; i++) {
		if (vetor_idade[i] < 16) {
			printf("%s\n", vetor_nome[i]);
		}	
	} 
	
	return 0;
}
