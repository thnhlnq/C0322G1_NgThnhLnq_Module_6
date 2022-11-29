public class SymmetricalArray {
    public static void main(String[] args) {
//        System.out.print("Nhập Số Phần Tử Của Mảng: ");
//        Scanner scanner = new Scanner(System.in);
//        int n = Integer.parseInt(scanner.nextLine());
//        int[] arr = new int[n];
//        for (int i = 0; i < n; i++) {
//            System.out.print("Nhập Phần Tử Thứ " + (i + 1) + ": ");
//            arr[i] = Integer.parseInt(scanner.nextLine());
//        }
//
//        // check symmetry
//        boolean flag = true;
//        int count = 0;
//        for (int i = 0; i < (arr.length) / 2; i++) {
//            if (arr[i] != arr[n - 1 - i]) {
//                flag = false;
//                break;
//            }
//            count++;
//        }
//
//        if (flag) {
//            System.out.println("Mảng Đối Xứng");
//        } else {
//            System.out.println("Mảng Không Đối Xứng");
//        }
//        System.out.println("Có " + count + " Cặp Số Đối Xứng.");

//        int[] arr = {3, 2, 4, 3, 5, 3, 2, 4, 1};
//        int count = 0;
//        for (int i = 0; i < arr.length / 2; i++) {
//            if (arr[i] == arr[arr.length - 1 - i]) {
//                count++;
//            }
//        }
//        System.out.println(count);

        int[] arr = {1, 2, 3, 4, 5, 5, 4, 3, 2, 1};
        boolean flag = false;
        int count = 0;
        for (int i = 0; i < arr.length / 2; i++) {
            if (arr[i] == arr[arr.length - 1 - i]) {
                flag = true;
                count++;
            }
        }
        System.out.println("Số Cặp Đối Xứng: " + count);
        if (flag) {
            System.out.print("Mảng Đối Xứng.");
        } else {
            System.out.print("Mảng Không Đối Xứng.");
        }
    }
}
