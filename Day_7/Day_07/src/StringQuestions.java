import java.util.Scanner;

public class StringQuestions {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a string to process: ");
        String inputString = scanner.nextLine();

        // 1. Demonstrate String Reversal
        String reversedResult = reverseString(inputString);
        System.out.println("Reversed String: " + reversedResult);

        // 2. Demonstrate Palindrome Check
        if (isPalindrome(inputString)) {
            System.out.println("Result: String is a Palindrome");
        } else {
            System.out.println("Result: Not a Palindrome String");
        }

        // 3. Demonstrate Substring Check
        System.out.print("\nEnter a substring to search for: ");
        String sub = scanner.nextLine();
        boolean containsSub = containsOrNot(inputString, sub);
        System.out.println("Contains substring? " + containsSub);

        scanner.close();
    }

    public static String reverseString(String str) {
        String rev = "";
        for (int i = str.length() - 1; i >= 0; i--) {
            rev = rev + str.charAt(i);
        }
        return rev;
    }

    public static boolean isPalindrome(String str) {
        String reversed = reverseString(str);
        return str.equals(reversed);
    }

    public static boolean containsOrNot(String str, String substr) {
        return str.contains(substr);
    }
}
