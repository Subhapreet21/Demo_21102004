
public class CallByValue {

    public static void main(String[] args) {
        int a = 10;
        System.out.println(a);
        test(a);
        System.out.println(a);
    }

    private static void test(int b) {
        System.out.println(b);
        b = 99;
        System.out.println(b);
    }
}
