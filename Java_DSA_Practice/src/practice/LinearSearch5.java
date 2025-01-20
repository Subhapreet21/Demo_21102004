
public class LinearSearch5 {

    public static void main(String[] args) {
        int[] arr = {10, 50, 40, 30, 20};
        int n = 50;
        int result = linearSearch(arr, n);
        System.out.println((result == -1 ? "Not found" : "Found at index " + result));
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
