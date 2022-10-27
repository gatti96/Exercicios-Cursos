#include <iostream>
#include <iomanip>
#include <bits/stdc++.h>

using namespace std; 

int main() {
	int n, i, cont;
	double media_soma, media, menores;
	
	cout << "Quantas pessoas serao digitadas? ";
	cin >> n;
	
	string vet_nome[n];
	int vet_idade[n];
	double vet_altura[n];
	
	for (i = 0; i < n; i++) {
		cout << "Dados da " << i+1 <<"a pessoa: " << endl;
		cout << "Nome: ";
		cin.ignore(INT_MAX, '\n'); 
		getline(cin, vet_nome[i]);
		cout << "Idade: ";
		cin >> vet_idade[i];
		cout << "Altura: ";
		cin >> vet_altura[i]; 
		cout << "\n";
	}
	
	media_soma = 0;
	media = 0;
	
	for (i = 0; i < n; i++) {
		media_soma = media_soma + vet_altura[i];
	}
	
	media = media_soma / n;
	cout << fixed << setprecision(2);
	cout << "Altura media: " << media << "." << endl;
	
	cont = 0;
	
	for (i = 0; i < n; i++) {
		if (vet_idade[i] < 16) {
			cont = cont + 1;	
		}
	}
	
	menores = ((float)cont * 100.0) / (float)n;
	cout << fixed << setprecision(1);
	cout << "Pessoas com menos de 16 anos: " << menores << "%" << endl;
	for (i = 0; i < n; i++) {
		if (vet_idade[i] < 16) {
			cout << vet_nome[i] << endl;
		}
	}
	
	return 0;
}
