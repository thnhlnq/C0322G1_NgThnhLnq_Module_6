import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.Set;

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

//    public static void main(String[] args) {
//        Integer arr[] = {1, 3, 3, 4, 5, 5, 9, 6, 6, 3};
//        Set<Integer> arr1 = new LinkedHashSet<>();
//        for (int i = 0; i < arr.length; i++) {
//            arr1.add(arr[i]);
//        }
//        Integer[] arr2 = Arrays.copyOf(arr1.toArray(), arr1.size(), Integer[].class);
//
//        for (int i = 0; i < arr.length; i++) {
//            if (i < arr2.length) {
//                arr[i] = arr2[i];
//            } else {
//                arr[i] = 0;
//            }
//        }
//        System.out.println(Arrays.toString(arr));
//    }

//    public static void main(String[] args) {
//        int[] arr = {6, 3, 2, 5, 7, 2, 1, 1, 6, 7};
//        int size = arr.length;
//        for (int i = 0; i < size - 1; i++) {
//            for (int j = i + 1; j < size; j++) {
//                if (arr[i] == arr[j]) {
//                    for (int k = j; k < size - 1; k++) {
//                        arr[k] = arr[k + 1];
//                    }
//                    arr[size - 1] = 0;
//                    size--;
//                }
//            }
//        }
//        System.out.println(Arrays.toString(arr));
//    }
}
