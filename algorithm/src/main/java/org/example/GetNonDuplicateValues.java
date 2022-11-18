package org.example;

import java.util.ArrayList;

public class GetNonDuplicateValues {
    public static ArrayList<Integer> removeDuplicate(int[] array) {
        ArrayList<Integer> result = new ArrayList<>();
        boolean flag = false;
        for (int i = 0; i < array.length; i++) {
            flag = false;
            for (int j = 0; j < array.length; j++) {
                if (array[i] == array[j] && i != j) {
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                result.add(array[i]);
            }
        }
        return result;
    }

    public static void main(String[] args) {
        int[] array = {1, 2, 2, 5, 4, 3, 2, 5, 8, 2};
        System.out.println(removeDuplicate(array));
    }
}
