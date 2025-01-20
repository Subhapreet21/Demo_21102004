
import java.util.Arrays;

public class MergeSort {

    public static void main(String[] args) {
        int[] arr = {9, 6, 4, 5, 8, 3, 7, 1};
        System.out.println("Before Merge Sort: " + Arrays.toString(arr));
        mergeSort(arr, 0, arr.length - 1);
        System.out.println("After Merge Sort: " + Arrays.toString(arr));
    }

    private static void mergeSort(int[] arr, int first, int last) {
        if (first < last) {
            int mid = (first + last) / 2;
            mergeSort(arr, first, mid);
            mergeSort(arr, mid + 1, last);
            merge(arr, first, mid, last);
        }
    }

    private static void merge(int[] arr, int first, int mid, int last) {
        int[] result = new int[last + 1];
        int i = first;
        int j = mid + 1;
        int k = first;

        while (i <= mid && j <= last) {
            if (arr[i] <= arr[j]) {
                result[k++] = arr[i++];
                // i++;
                // k++;
            } else {
                result[k++] = arr[j++];
                // j++;
                // k++;
            }
        }
        if (i > mid) {
            while (j <= last) {
                result[k++] = arr[j++];
                // j++;
                // k++;
            }
        }
        if (j > last) {
            while (i <= mid) {
                result[k++] = arr[i++];
                // i++;
                // k++;
            }
        }
        for (int z = first; z <= last; z++) {
            arr[z] = result[z];
        }
    }
}
