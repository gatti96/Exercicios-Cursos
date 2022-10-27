#include <iostream>
#include <bits/stdc++.h>

using namespace std; 

int main() {
	int n, i, j, negativo;
	
	cout << "Qual a ordem da matriz? ";
	cin >> n;
	
	int matriz[n][n];
	
	for (i = 0; i < n; i++) {
		for (j = 0; j < n; j++) {
			cout << "Elemento [" << i << "," << j << "]: ";
			cin >> matriz[i][j]; 
		}
	}
	
	cout << "\n";
	for (i = 0; i < n; i++) {
		for (j = 0; j < n; j++) {
			if (matriz[i][j] == matriz[0][0]) {
				cout << matriz[i][j] << "  ";
			}
			  else if (matriz[i][j] == matriz[1][1]) {
			  	cout << matriz[i][j] << "  ";
			  }
				else if (matriz[i][j] == matriz[2][2]) {
					cout << matriz[i][j] << "  ";
				}
		}
	}
	cout << "\n";
	
	cout << "QUANTIDADE DE NEGATIVOS = ";
	negativo = 0;
	
	for (i = 0; i < n; i++) {
		for (j = 0; j < n; j++) {
			if (matriz[i][j] < 0) {
				negativo = negativo + 1;	
			}
		}
	}
	
	cout << negativo << "." << endl;
	
	return 0;
}
