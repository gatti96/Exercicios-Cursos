import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US); 
		Scanner sc = new Scanner(System.in);
		
		double base, altura, area, perimetro, b, h, diametro;
		
		System.out.print("Base do retangulo: ");
		base = sc.nextDouble();
		System.out.print("Altura do retangulo: ");
		altura = sc.nextDouble();
		
		area = base * altura;
		perimetro = (2 * base) + (2 * altura);
		b = Math.pow(base, 2);
		h = Math.pow(altura, 2);
		diametro = Math.sqrt(b + h);
		
		System.out.println();
		System.out.println("AREA = " + String.format("%.4f", area));
		System.out.println("PERIMETRO = " + String.format("%.4f", perimetro));
		System.out.println("DIAGONAL = " + String.format("%.4f", diametro));

	}

}
