public class SecondLargest {

    // tìm số lớn thứ 2
//    static void printSecondLargest(int[] arr, int arr_size) {
//        int i, first, second;
//        if (arr_size < 2) {
//            System.out.print(" Khong hop le ");
//            return;
//        }
//        first = second = Integer.MIN_VALUE;
//        for (i = 0; i < arr_size; i++) {
//            if (arr[i] > first) {
//                second = first;
//                first = arr[i];
//            }
//            if (arr[i] < first && arr[i] > second) {
//                second = arr[i];
//            }
//        }
//        if (second == Integer.MIN_VALUE)
//            System.out.print("Khong ton tai phan tu lon thu 2 ");
//        else
//            System.out.print("Phan tu lon thu 2: " + second);
//    }
//
//    public static void main(String[] args) {
//        int[] arr = {12, 35, 1, 10, 34, 1};
//        int n = arr.length;
//        printSecondLargest(arr, n);
//    }

    public static void main(String[] args) {
        int[] arr = {2, -30, 4, 50, 6, 7, 8, 30, 10, 11, 12, -150, 13, 14, 16, 17, 18, 19, 20, 49, 50, 50};

//        int max1 = arr[0];
//        int max2 = arr[0];
//
//        for (int i = 0; i < arr.length; i++) {
//            if (arr[i] > max1) {
//                max2 = max1;
//                max1 = arr[i];
//            }
//            if (arr[i] < max1 && arr[i] > max2 || max1 == max2) {
//                max2 = arr[i];
//            }
//        }
//        System.out.print("max1 = " + max1 + " & max2 = " + max2);

        int max1 = arr[0];
        int max2 = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > max1) {
                max2 = max1;
                max1 = arr[i];
            }
            if (arr[i] > max2 && arr[i] != max1) {
                max2 = arr[i];
            }
        }
        System.out.println(max1);
        System.out.println(max2);
    }
}
