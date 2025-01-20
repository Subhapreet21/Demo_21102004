
public class LinearSearch6 {

    public static void main(String[] args) {
        int[] arr = {10, 50, 40, 30, 20};
        int n = 50;
        System.out.println((linearSearch(arr, n) == -1 ? "Not found" : "Found at index " + linearSearch(arr, n)));
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
