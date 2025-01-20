
import java.util.Scanner;

public class LinearSearchProblem2 {

    public static void main(String[] args) {
        int[] arr = {100, 500, 400, 700, 200, 500, 600};
        int numberOfTargets = 3;
        Scanner s = new Scanner(System.in);
        for (int i = 1; i <= numberOfTargets; i++) {
            System.out.print("Enter Target number " + i + ":");
            int target = s.nextInt();
            int flag = 0;
            int sum = 0;
            for (int j = 0; j < arr.length; j++) {
                sum += arr[j];
                if (sum >= target) {
                    flag = 1;
                    System.out.println("Target achieved at day " + (j + 1));
                    break;
                }
            }
            if (flag == 0) {
                System.out.println("Target not achieved");
            }
        }
    }
}
