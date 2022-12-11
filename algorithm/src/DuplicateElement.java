public class DuplicateElement {
    public static void main(String[] args) {
        int[] a = {1, 3, 5, 7, 8, 2, 2};
        int[] b = {3, 4, 0, 2, 5, 8};
        System.out.print("Các phần tử trùng lặp là: ");
        int count = 0;
        for (int j : a) {
            for (int k : b) {
                if (j == k) {
                    System.out.print(j + " ");
                    count++;
                }
            }
        }
        System.out.println("\nSố Phần Tử Trùng Lặp: " + count);
    }
}
