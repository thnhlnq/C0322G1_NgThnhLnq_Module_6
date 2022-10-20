package org.example;

import java.util.Scanner;

public class SymmetricalArray {
    public static void main(String[] args) {
        System.out.println("Nhập số phần tử của Mảng: ");
        Scanner scanner = new Scanner(System.in);
        int[] arr;
        int n = Integer.parseInt(scanner.nextLine());
        arr = new int[n];
        for (int i = 0; i < n; i++) {
            System.out.println("Nhập các Phần tử: ");
            arr[i] = Integer.parseInt(scanner.nextLine());
        }

        // check symmetry
        boolean flag = true;
        int mid = n / 2;
        int x;
        for (int i = 0; i < mid; i++) {
            x = n - 1 - i;
            if (arr[i] != arr[x]) {
                flag = false;
                break;
            }
        }

        if (flag) {
            System.out.println("Mảng đối xứng");
        } else {
            System.out.println("Mảng không đối xứng");
        }
    }
}
