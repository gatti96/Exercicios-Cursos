#include <iostream>
#include <bits/stdc++.h>

using namespace std;

int main() {
	int x, y;
	
	cout << "Digite dois numeros\n";
	cin >> x;
	cin.ignore(INT_MAX, '\n');
	cin >> y;
	
	while (x != y) {
		if (x < y) {
			cout << "Crescente.\n" << endl;
		}
			else {
				cout << "Decrescente.\n" << endl;
			}
	cout << "Digite dois numeros\n";
	cin >> x;
	cin.ignore(INT_MAX, '\n');
	cin >> y;
	}
	
	return 0;
}
