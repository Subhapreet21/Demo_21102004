
public class LinearSearch {

    public static void main(String[] args) {
        int[] arr = {10, 50, 40, 30, 20};
        int n = 50;
        int flag = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == n) {
                flag = 1;
                System.out.println("Element is present at index " + i);
                break;
            }
        }
        if (flag == 0) {
            System.out.println("Element is not present in array");
        }
    }
}
