
public class LinearSearch2 {

    public static void main(String[] args) {
        int[] arr = {10, 50, 40, 30, 20};
        int n = 50;
        int i;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] == n) {
                System.out.println("Element is present at index " + i);
                break;
            }
        }
        if (i == arr.length) {
            System.out.println("Element is not present in array");
        }
    }
}
