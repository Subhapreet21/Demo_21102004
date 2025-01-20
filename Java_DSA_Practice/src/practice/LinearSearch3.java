
public class LinearSearch3 {

    public static void main(String[] args) {
        int[] arr = {10, 50, 40, 30, 20};
        int n = 50;
        int result = linearSearch(arr, n);
        if (result == -1) {
            System.out.println("Not found");
        } else {
            System.out.println("Found at index " + result);
        }
    }

    private static int linearSearch(int[] arr, int n) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == n) {
                return i;
            }
        }
        return -1;
    }
}
