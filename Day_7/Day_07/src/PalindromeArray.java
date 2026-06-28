public class PalindromeArray {
    public static void main(String[] args) {
        int[] array = {10, 20, 30, 20, 10};
        boolean isPalindrome = true;
        int left = 0, right = array.length - 1;
        while (left < right) {
            if (array[left] != array[right]) {
                isPalindrome = false;
                break;
            }
            left++;
            right--;
        }
        if(isPalindrome){
            System.out.println("palindrome");
        }
        else
        {
            System.out.println("not palindrome");
        }
    }
}
