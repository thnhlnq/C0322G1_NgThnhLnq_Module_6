package org.example;

public class DuplicateElement {

    public static void printUnion(int[] a, int[] b) {
        for (int k : a) {
            for (int i : b) {
                if (k == i)
                    System.out.print(k + " ");
            }
        }
    }

    public static void main(String[] args) {
        int[] a = {1, 3, 5, 7, 8, 2};
        int[] b = {3, 4, 0, 2, 5};
        System.out.print("Các phần tử trùng lặp là: ");
        printUnion(a, b);
    }
}
