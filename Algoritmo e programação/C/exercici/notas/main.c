#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {

   double nota1, nota2, media;

   printf("Digite a primeira nota: ");
   scanf("%lf", &nota1);

   printf("Digite a segunda nota: ");
   scanf("%lf", &nota2);

   media = (nota1 + nota2) / 2;

   printf("NOTA FINAL = %.1lf", media);

   if (media < 60) {
    printf("REPROVADO");
   }

    return 0;
}
