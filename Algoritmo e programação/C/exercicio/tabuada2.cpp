#include <iostream>
#include <string.h>
#include <stdio.h>
#include <math.h>


int main() {
	int x, y, conta;
	
	printf("Deseja a tabuada para qual valor? ");
	scanf("%i", &x);

	y = 1;
	for (i = 1; i <= 10; i++) {
		conta = x * y;
		printf("%i x %i = %i \n" x, y, conta);
		y = y + 1;
	}
	
	return 0;
}
