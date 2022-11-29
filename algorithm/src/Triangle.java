import java.util.Scanner;

public class Triangle {

    // Tam giác cân
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int height, k = 0;
        System.out.print("Nhap chieu cao Tam giac: ");
        height = sc.nextInt();
        for (int i = 1; i <= height; ++i, k = 0) {
            for (int j = 1; j <= height - i; ++j) {
                System.out.print("  ");
            }
            while (k != 2 * i - 1) {
                System.out.print("* ");
                ++k;
            }
            System.out.println();
        }
    }
}
