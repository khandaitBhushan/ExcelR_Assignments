import java.util.Arrays;

// add and remove element from an array
public class ManipulateArray {
    public static void main(String[] args) {
        int[]arr = {1,2,3,4,5,6,7,8,9};

        int addIndex = 1, removeIndex = 1;
        arr = addElement(arr,99,addIndex);

        System.out.println("after element added");
        System.out.println(Arrays.toString(arr));

        arr = removeElement(arr,99, removeIndex);

        System.out.println("after element removal");
        System.out.println(Arrays.toString(arr));
    }

   static int[] addElement(int[]arr,int ele,int index){
        int[]temp = new int[arr.length+1];
        for(int i =0;i<temp.length;i++){
            if(i == index)
                temp[i] = ele;
            else if(i<index)
                temp[i] = arr[i];
            else temp[i] = arr[i-1];
        }
        return temp;
    }
    static int[] removeElement(int[]arr,int ele,int index){
        int[]temp = new int[arr.length-1];
        for(int i =0;i<arr.length;i++){
            if(i == index)
                continue;
            else if(i<index)
                temp[i] = arr[i];
            else temp[i-1] = arr[i];
        }
        return temp;
    }
}
