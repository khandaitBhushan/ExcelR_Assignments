import java.util.Arrays;

// reverse array without another array
public class ReverseArray {
    public static void main(String[] args) {
        int[]arr = {8,6,4,3,2,15,9,7,2};

        int start = 0, end = arr.length-1;

        while (start<end){
            int t = arr[start];
            arr[start]=arr[end];
            arr[end]= t;
            end--;start++;
        }

        System.out.println("reversed array : "+ Arrays.toString(arr));
    }
}
