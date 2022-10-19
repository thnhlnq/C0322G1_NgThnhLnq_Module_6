public class SecondLargest {

    // tìm số lớn thứ 2
    static void printSecondLargest(int[] arr, int arr_size) {
        int i, first, second;
        if (arr_size < 2) {
            System.out.print(" Khong hop le ");
            return;
        }
        first = second = Integer.MIN_VALUE;
        for (i = 0; i < arr_size; i++) {
            if (arr[i] > first) {
                second = first;
                first = arr[i];
            }
            if (arr[i] < first && arr[i] > second) {
                second = arr[i];
            }
        }
        if (second == Integer.MIN_VALUE)
            System.out.print("Khong ton tai phan tu lon thu 2 ");
        else
            System.out.print("Phan tu lon thu 2: " + second);
    }

    public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34, 1};
        int n = arr.length;
        printSecondLargest(arr, n);
    }
}
