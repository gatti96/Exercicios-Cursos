import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US); 
		Scanner sc = new Scanner(System.in);
		
		int a, b, c;
		System.out.print("Primeiro Valor: ");
		a = sc.nextInt();
		System.out.print("Segundo valor: ");
		b = sc.nextInt();
		System.out.print("Terceiro valor: ");
		c = sc.nextInt();
		System.out.println();
		
		if (a < b && a < c) {
			System.out.println("Menor: " + a);
		}
			else if (b < c) {
				System.out.println("Menor: " + b);
			}
				else {
					System.out.println("Menor: " + c);
				}
			
		
	}

}
