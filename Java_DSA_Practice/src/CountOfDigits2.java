
public class CountOfDigits2 {

    public static void main(String[] args) {
        long[] arr = {8123290777L, 8125162374L, 8127409022L, 8128409017L, 8122831937L};
        int odd_counter, even_counter, r;
        for (int i = 0; i < arr.length; i++) {
            long n = arr[i];
            odd_counter = 0;
            even_counter = 0;
            while (n > 0) {
                r = (int) n % 10;
                if (r % 2 == 0) {
                    even_counter++;
                } else {
                    odd_counter++;
                }
                n = n / 10;
            }
            System.out.println(String.format("Number %d has %d odd digits and %d even digits", (i + 1), odd_counter, even_counter));
        }
    }
}
