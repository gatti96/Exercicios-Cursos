#include <iostream>
#include <bits/stdc++.h>

using namespace std;

int main() {
	int x, y, soma, i, troca;
	
	cout << "Digite dois numeros:\n";
	cin >> x;
	cin.ignore(INT_MAX, '\n');
	cin >> y;
	
	if (x > y) {
		troca = x;
		x = y;
		y = troca;
	}
	
	soma = 0;
	
	for (i = x+1; i < y; i++) {
		if (i % 2) {
			soma = soma + i;
		}
	}
	
	cout << "Soma dos impares: " << soma << endl;
	
	return 0;
}
