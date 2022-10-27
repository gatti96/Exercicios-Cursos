#include <iostream>
#include <string>
#include <bits/stdc++.h>

using namespace std;

int main() {
	double base, area, altura, perimetro, diagonal;
	
	cout << "Qual a base do retangulo: ";
	cin >> base;
	cout << "Qual a altura do retangulo: ";
	cin >> altura;
	
	area = base * altura;
	perimetro = 2 * base + 2 * altura;
	diagonal = sqrt(pow(base, 2) + pow(altura, 2));
	
	cout << "Area: " << area << endl;
	cout << "Perimetro: " << perimetro << endl;
	cout << "Diagonal: " << diagonal << endl;
	
	return 0;
}
