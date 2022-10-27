#include <iostream>
#include <stdio.h>
#include <string.h>
#include <math.h>

int main() {
	int x, y, conta;
	
	printf("Deseja a tabuada para qual valor? ");
	scanf("%i", &x);
	
	y = 0;
	
	while (y <= 10) {
	 conta = x * y;	
	 printf("%i X  %i =  %i \n", x, y, conta);
	 y = y + 1;	
	}
	
	return 0;
}
