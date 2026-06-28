import java.util.Arrays;

public class ArrayProblems {
    static int[]arr = {1,5,7,3,4,6,9,2};

    public static void main(String[] args) {

        //1. find odd and even numbers sum saperate
        oddSum();
        evenSum();

        // 2.two arrays equal or not
        int[] array1 = {1, 2, 3, 4, 5};
        int[] array2 = {1, 2, 3, 4, 5};
        isEqual(array1,array2);


        //3.finding min and max value without sorting
        int[] numbers = {3, 5, 7, 2, 8, -1, 4, 10, 12};
        int min = Arrays.stream(numbers).min().getAsInt();
        int max = Arrays.stream(numbers).max().getAsInt();
        System.out.println("Min : "+min);
        System.out.println("Max : "+max);
    }

    private static void isEqual(int[] array1, int[] array2) {
        if (array1.length != array2.length){
            System.out.println("Both are unequal");
            return;
        }

        for(int i = 0;i<array2.length;i++){
            if(array1[i]!=array2[i]) {
                System.out.println("Both are unequal");
                return;
            }
        }
        System.out.println("Both are equal");
    }

    static void oddSum(){
        int sum = 0;
        for(int i : arr){
            if((i&1) !=0)
                sum +=i;
        }
        System.out.println("Odd numbers sum in Array : "+sum);
    }
    static void evenSum(){
        int sum = 0;
        for(int i : arr){
            if((i&1) ==0)
                sum +=i;
        }
        System.out.println("Even numbers sum in Array : "+sum);
    }
}
