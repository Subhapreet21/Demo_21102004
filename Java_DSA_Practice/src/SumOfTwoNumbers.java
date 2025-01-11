public class SumOfTwoNumbers {
    public static void main(String[] args) {
        int[] arr={10,20,40,100,160};
        int sum=210;
        int flag=0;
        for (int i = 0; i < arr.length; i++) {
            for (int j=i;j<arr.length;j++){
                if (arr[i]+arr[j]==sum){
                    System.out.println("The sum of "+arr[i]+" and "+arr[j]+" is equal to "+sum);
                    flag=1;
                    break;
                }
            }
        }
        if (flag==0){
            System.out.println("No such pair found");
        }
    }
}
