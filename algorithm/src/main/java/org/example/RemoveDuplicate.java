package org.example;

import java.util.Arrays;

public class RemoveDuplicate {
    public static void main(String[] args) {
        Integer[] arr = {1, 2, 3, 4, 5, 4, 2, 3, 4, 6};
        Arrays.sort(arr);
        int size = arr.length;

        for (int k = 0; k < size - 1; k++) {
            if (arr[k] == arr[k + 1] && arr[k] != 0) {
                for (int l = k; l < size - 1; l++) {
                    arr[l] = arr[l + 1];
                }
                arr[size - 1] = 0;
                size--;
                k--;
            }
        }
        System.out.println(Arrays.toString(arr));
    }
}
