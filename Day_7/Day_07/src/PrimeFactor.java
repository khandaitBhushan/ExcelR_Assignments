// prime factors
public class PrimeFactor {
    public static void main(String[] args) {
        int num = 14;

        for(int i = 2;i<= num;i++){
            if(num % i ==0){
                boolean isPrime = true;

                for (int j = 2; j <= i/2 ; j++) {
                    if(i%j ==0)
                        isPrime= false;
                }

                if(isPrime)
                    System.out.println(i);
            }
        }
    }

}
