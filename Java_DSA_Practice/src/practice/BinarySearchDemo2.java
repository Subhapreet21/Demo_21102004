
public class BinarySearchDemo2 {

    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50, 60};
        int search = 77;
        int index = binarySearch(arr, search);
        if (index != -1) {
            System.out.println("Element is present at index " + index);
        } else {
            System.out.println("Element is not present in array");
        }
    }

    private static int binarySearch(int[] arr, int search) {
        int first = 0;
        int last = arr.length - 1;
        int mid = 0;
        while (first <= last) {
            mid = (first + last) / 2;
            if (search == arr[mid]) {
                break;
            } else if (search > arr[mid]) {
                first = mid + 1;
            } else {
                last = mid - 1;
            }
        }
        if (first > last) {
            return -1;
        }
        return mid;
    }
}
