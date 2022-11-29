package OCA.OCA_9;

public class OCA_9 {
    public static void main(String[] args) {
//        boolean opt = true;
        String opt = "true";
//        boolean opt = 1;
        switch (opt) {
            case "true":
                System.out.println("True");
                break;
            default:
                System.out.println("***");
        }
        System.out.println("Done");

        int x = 100;
        int a = x++;
        int b = ++x;
        int c = x++;
//        int d = (a < b) ? (a < c) ? a : (b < c) ? b : c;
//        System.out.println(d);
    }
}
