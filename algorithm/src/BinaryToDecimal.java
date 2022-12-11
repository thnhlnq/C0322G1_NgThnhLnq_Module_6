import java.util.Scanner;

public class BinaryToDecimal {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Nhập Số Nhị Phân: ");
        String binaryString = input.nextLine();
        System.out.println("Giá Trị Số Thập Phân Là: " + Integer.parseInt(binaryString, 2));
    }
}
