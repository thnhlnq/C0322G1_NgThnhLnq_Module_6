public class Divisible5 {
    public static void main(String[] args) {
        int num = 20;
        int sum = 0;
//        int check = 0;
        for (int i = 1; i <= num; i++) {
            if (i % 5 == 0) {
                sum += i;
//                check++;
                System.out.println(i);
            }
//            if (check == 2) {
//                break;
//            }
        }
        System.out.println("Sum: " + sum);
    }
}
