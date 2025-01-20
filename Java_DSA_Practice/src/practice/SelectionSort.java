
import java.util.Arrays;

public class SelectionSort {

    public static void main(String[] args) {
        int arr[] = {6, 7, 2, 5, 3};
        System.out.println("Before: " + Arrays.toString(arr));
        selectionSort(arr);
        System.out.println("After: " + Arrays.toString(arr));
    }

    private static void selectionSort(int[] arr) {
        int temp;
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
}
