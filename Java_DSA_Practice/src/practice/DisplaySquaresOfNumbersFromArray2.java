
public class DisplaySquaresOfNumbersFromArray2 {

    public static void main(String[] args) {
        int[] arr = {25, 9, 13, 16, 21};
        for (int n : arr) {
            int sq = (int) Math.sqrt(n);
            if (sq * sq == n) {
                System.out.println(n);
            }
        }
    }
}
