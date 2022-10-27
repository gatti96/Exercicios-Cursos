#include <stdio.h>
#include <string.h>

void ler_texto(char *buffer, int length) {
 fgets(buffer, length, stdin);
 strtok(buffer, "\n");
}

void limpar_entrada()  {
    char c;
    while ((c = getchar()) != '\n' && c != EOF) {}
}

int main() {
    double idade1, idade2, media;
    char nome1[50], nome2[50];

    printf("Dados da primeira pessoa: \n");
    printf("NOME: ");
    ler_texto(nome1, 50);
    printf("IDADE: ");
    scanf("%lf", &idade1);

    printf("Dados da segunda pessoa: \n");
    printf("NOME: ");
    limpar_entrada();
    ler_texto(nome2, 50);
    printf("IDADE: ");
    scanf("%lf", &idade2);

    media = (idade1 + idade2) / 2;

    printf("A idade media de %s", nome1);
    printf(" e %s", nome2);
    printf(" e %.2lf", media);

    return 0;
}
