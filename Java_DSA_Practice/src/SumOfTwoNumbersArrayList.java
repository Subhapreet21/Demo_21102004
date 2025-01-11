import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
public class SumOfTwoNumbersArrayList{
    public static void main(String args[]){
        List<Integer> arr= new ArrayList<>(Arrays.asList(10,20,40,100,160));
        int sum=170;
        int flag=0;
        int num1,num2;
        for(int i=0;i<arr.size();i++){
            num1=arr.get(i);
            num2=sum-num1;
            if(arr.contains(num2)){
                System.out.println("[ "+num1+" , "+num2+" ]");
                flag=1;
                break; 
            }
        }
        if(flag==0){
            System.out.println("There is no two sum for "+sum+" in array");
        }
    }
}