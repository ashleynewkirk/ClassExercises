public class Lab520 {
    public static void main(String[] arg) {
        int firstInt = 6;
        int secondInt = 20;
        int thirdInt = 4;
        float firstFloat = 4.4f;
        boolean isCold = false;


        System.out.println(firstInt);
        System.out.println(secondInt);
        //System.out.println(thirdInt);
        System.out.println(firstFloat);
        System.out.println(isCold);

        int newValue = firstInt + secondInt;
        int newValue2 = firstInt + thirdInt;
        int newInt = ((secondInt % firstInt) + firstInt);

        //Lab 2
        System.out.println(newValue);
        System.out.println(newValue2); //must assign a value to thirdInt;
        System.out.println(firstInt / secondInt);
        System.out.println(secondInt % firstInt);
        System.out.println(++newInt);

        //Lab 3
        int x = 100;
        boolean aboolean = x == 100;
        int y = 106;
        int z = 92;


        System.out.println(aboolean);
        System.out.println(x > y);
        System.out.println(y > x);
        System.out.println(x >= y - 6);
        System.out.println(x < y != x > y);
        System.out.println((x < y) && (y < z));
        System.out.println((y < z) && (x >= y));
        System.out.println(z > y + x || x - y < z);

        // Lab 4

        //int n = 64;
        //int n = 40;
        int n = 35;

        System.out.println(n / 2 == n >> 1);
        System.out.println(n * 2 == n << 1);
        System.out.println(n * 4 == n << 2);


        anotherMethod();
        playWithStrings();

    }


    //Lab 5 & 6

    public static void anotherMethod() {
        int justInt = 6;
//
//
        if (justInt > 1000) {
            System.out.println(justInt + " is a Big value");
        } else {
            System.out.println(justInt + " is not a big value.");


        }

        Integer justInt2 = justInt / 2;
        Integer thousand = Integer.valueOf("1000");
        if (thousand.compareTo(justInt2) < 0) {
            System.out.println(justInt2 + " is half a big variable");
        } else {
            System.out.println(justInt2 + " is definitely small");
        }

    }


    //Lab 7
    public static void playWithStrings() {

        String firstName = "Ashley";
        String lastName = new String("Newkirk");

        System.out.println(firstName.concat(" " + lastName));
        String fullName = firstName.concat(" " + lastName);
        System.out.println("Hello " + firstName + " " + lastName);
        System.out.println("The total length is " + fullName.length());

        if (fullName.contains("o")) {
            System.out.println(fullName.indexOf("o"));
        } else {
            System.out.println("Full name does not contain 'o' ");
        }

        System.out.println("The character at position 7 is: " + fullName.charAt(7));

        if (fullName.contains("son")) {
            System.out.println("The string contains 'son'.");

        } else {
            System.out.println("It does not contain 'son'.");
        }
        System.out.println("The last 5 characters are " + fullName.substring(fullName.length() - 5));

        if (fullName.contains("-") || fullName.contains(" ' ")) {
            System.out.println("It has an apostrophe or a dash");
        } else {
            System.out.println("it does not have an apostrophe or a dash");
        }
    }
}