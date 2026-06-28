public class SecondMax {
    public static void main(String[] args) {
        int [] arr = {-500,-200,-100,-100,-300};

        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;

        for(int i : arr){
            if(i>first){
                second = first;
                first = i;
            } else if (first != i && second<i) {
                second = i;
            }
        }
        System.out.println("second max : "+second);
    }
}
