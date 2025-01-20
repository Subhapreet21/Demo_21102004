// From an array display the perfect squares

public class DisplaySquaresOfNumbersFromArray {

    public static void main(String[] args) {
        int[] arr = {25, 9, 13, 16, 29};
        for (int i = 0; i < arr.length; i++) {
            if (Math.sqrt(arr[i]) * Math.sqrt(arr[i]) == arr[i]) {
                System.out.println(arr[i] + " is a perfect square");
            }
        }
    }
}
