package OCA.OCA_2;

public class OCA_2 {
    public static void main(String[] args) {
        int aVar = 9;
        if (aVar++ < 10) {
            System.out.println(aVar + " World");
        } else {
            System.out.println(aVar + " Universe");
        }

//        Short s1 = 200;
//        Integer s2 = 400;
//        Long s3 = (long) s1 + s2;
//        String s4 = (String) (s3 * s2); // compilation fails
//        System.out.println("Sum is " + s4);
    }
}
