package OCA.OCA_11;

public class Employee {
    String name;
    boolean contract;
    double salary;

    Employee() {
        // line1
        name = "Joe";
        contract = true;
        salary = 100;
    }

    public String toString() {
        return name + ":" + contract + ":" + salary;
    }

    public static void main(String[] args) {
        Employee e = new Employee();
        // line2
        System.out.println(e);
    }
}
