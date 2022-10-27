import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US); 
		Scanner sc = new Scanner(System.in);
		
		int x, i;
		double soma, media;
		
		System.out.print("Quantos numeros voce vai digitar: ");
		x = sc.nextInt();
		
		double[] vet = new double[x];
		
		for (i = 0; i < x; i++) {
			System.out.print("Digite um numero: ");
			vet[i] = sc.nextDouble();
			}
		
		System.out.print("Valores: ");
		for (i = 0; i < x; i++) {
			System.out.print(String.format("%.1f", vet[i])+ ", ");
		}
		System.out.println();
		
		soma = 0;
		for (i = 0; i < x; i++) {
			soma = soma + vet[i];
		}
		System.out.println("Soma: " + String.format("%.2f", soma));
		
		media = soma / x;
		System.out.println("Media dos valores: " + String.format("%.2f", media));

	}

}
