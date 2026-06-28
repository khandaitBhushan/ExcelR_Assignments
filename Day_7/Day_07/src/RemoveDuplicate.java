import java.util.ArrayList;
import java.util.Arrays;

public class RemoveDuplicate {
    // remove duplicate without collections

    public static void main(String[] args) {
        int[]arr = {1,6,6,7,2,3,1,5,8};
        ArrayList<Integer>updatedArr = new ArrayList<>();

        Arrays.sort(arr);
        for(int i=0;i<arr.length-1;i++){
            if(arr[i]!=arr[i+1])
                updatedArr.add(arr[i]);
        }

        System.out.println("Update array without duplicate : "+updatedArr);
    }
}
