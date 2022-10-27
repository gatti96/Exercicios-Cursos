#include <iostream>
#include <bits/stdc++.h>

using namespace std;

int main() {
	int x, y, z, menor;
	
	cout << "Digite o primeiro valor: ";
	cin >> x;
	cout << "Digite o segundo valor: ";
	cin >> y;
	cout << "Digite o terceiro valor: ";
	cin >> z;
	
	menor = 0;
	
	if (x < y && x < z) {
		menor = x;
	}
		else if (y < z) {
			menor = y;
		}
			else {
				menor = z;
			}
			
	
	
	cout << "Menor: " << menor << endl;
	
	return 0;
}
