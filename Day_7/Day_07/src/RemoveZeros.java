import java.util.ArrayList;

// remove zeros from array
public class RemoveZeros {
    public static void main(String[] args) {
        int[]arr = {0,0,1,2,4,0,8,0,4,12,0,1};

        ArrayList<Integer> ele = new ArrayList<>();

        for(int i : arr)
            if(i!=0)
                ele.add(i);

        System.out.println("Array without zero : "+ele);
    }
}
