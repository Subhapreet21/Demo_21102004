
import java.util.ArrayList;

public class CollectionDemo {

    public static void main(String args[]) {
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(40);
        System.out.println(numbers);
        System.out.println("Integer Array size: " + numbers.size());
        int remove = numbers.remove(1);
        System.out.println("Removed element: " + remove);
        System.out.println("Contains Method: " + numbers.contains(20));
        System.out.println("Get Method: " + numbers.get(2));
        numbers.clear();
        System.out.println("After clear() method: " + numbers);
    }
}
