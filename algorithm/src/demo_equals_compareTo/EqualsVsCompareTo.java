package demo_equals_compareTo;

public class EqualsVsCompareTo {
    public static void main(String[] args) {
        String str1 = new String("124");
        String str3 = new String("124");
        String str2 = "123";
        System.out.println(str1.equals(str3));
        compareTo(str1, str2);
    }

    public static int compareTo(String str1, String str2) {
        if (str1.compareTo(str2) > 0) {
            System.out.println(str1 + " Lớn Hơn " + str2);
            return 1;
        } else if (str1.compareTo(str2) < 0) {
            System.out.println(str1 + " Bé Hơn " + str2);
            return -1;
        } else {
            System.out.println(str1 + " Bằng " + str2);
            return 0;
        }
    }
}

