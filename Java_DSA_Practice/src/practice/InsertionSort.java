
import java.util.Arrays;

public class InsertionSort {

    public static void main(String[] args) {
        int arr[] = {6, 7, 2, 5, 3};
        System.out.println("Before: " + Arrays.toString(arr));
        insertionSort(arr);
        System.out.println("After: " + Arrays.toString(arr));
    }

    private static void insertionSort(int[] arr) {
        int temp, j;
        for (int i = 1; i < arr.length; i++) {
            temp = arr[i];
            j = i - 1;
            while (j >= 0 && temp <= arr[j]) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = temp;
        }
    }
}
