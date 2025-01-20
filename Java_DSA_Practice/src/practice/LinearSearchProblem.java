
public class LinearSearchProblem {

    public static void main(String[] args) {
        int[] arr = {100, 500, 400, 700, 200, 500, 600};
        int t_1 = 1000;
        int t_2 = 2000;
        int t_3 = 5000;
        int totalTarget = 0;
        int t1 = 0, t2 = 0, t3 = 0;
        for (int i = 0; i < arr.length; i++) {
            totalTarget += arr[i];
            t1 = totalTarget;
            t2 = totalTarget;
            t3 = totalTarget;
        }
        System.out.println(t1 >= t_1 ? "Target 1 is reached" : "Target 1 not raeched");
        System.out.println(t2 >= t_2 ? "Target 2 is reached" : "Target 2 not raeched");
        System.out.println(t3 >= t_3 ? "Target 3 is reached" : "Target 3 not reached");
    }
}
