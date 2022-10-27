import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US); 
		Scanner sc = new Scanner(System.in);
		
		int x, tab;
		
		System.out.println("Qual tabuada deseja: ");
		x = sc.nextInt();
		System.out.println();
		
		for (int i = 0; i <= 10; i++) {
			tab = x * i;
			System.out.println(x + " X " + i + " = " + tab + ".");
		}

	}

}
