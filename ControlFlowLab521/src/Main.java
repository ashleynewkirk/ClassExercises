
import java.util.*;

public class Main {

    public static void main(String[] args) {


//      scanner reads input from the command line through various methods
        Scanner scanner = new Scanner(System.in);
        char answer;
        do {
//        prompt and read a string
//        System.out.print("Enter your name: ");
//        String userName = scanner.next();
//
//        prompt and read an int
//        System.out.print("Enter your age: ");
//        int age = scanner.nextInt();
//
//        System.out.println(String.format("Hello %s, your age is %d", userName, age));
//
//
//        Part 1------------
//        if (age >= 16) {
//            System.out.println("You are old enough to drive.");
//        } else {
//            System.out.println("You're not old enough to drive.");
//        } if (age >= 18) {
//            System.out.println("You are old enough to vote");
//        } else {
//            System.out.println("You are not old enough to vote");
//        } if (age >= 21) {
//            System.out.println("You are old enough to drink.");
//        } else {
//            System.out.println("You're not old enough to drink.");
//        } if (age >= 35) {
//            System.out.println("You are old enough to be President");
//        } else {
//            System.out.println("You're not old enough to be President");
//        } if (age >= 55) {
//            System.out.println("You can join AARP");
//        } else {
//            System.out.println("You're not old enough to join AARP");
//        } if (age >= 67) {
//            System.out.println("You can start drawing Social Security");
//        } else {
//            System.out.println("You're not old enough to start drawing Social Security. ");
//        }
//
//        Part 2--------------
//        System.out.print("Are you employed (E), unemployed (U), or a student (S). Enter 'E, U, or S': ");
//        String employment = scanner.next();
//
//        String employment2 = employment.toUpperCase();
//
//        System.out.print("Do you drive a car (C), SUV (S), or a truck (T). Enter 'C, S, or T': ");
//        String car = scanner.next();
//
//        String car2 = car.toUpperCase();
//
//        switch (employment2){
//            case "E":
//                System.out.println("You are employed.");
//                break;
//
//            case "U":
//                System.out.println("You are unemployed.");
//                break;
//            case "S":
//                System.out.println("You are a student.");
//                break;
//            default:
//                System.out.println("I don't know what you do.");
//        }
//
//
//        switch (car2){
//            case "C":
//                System.out.println("You drive a car.");
//                break;
//
//            case "S":
//                System.out.println("You drive an SUV.");
//                break;
//            case "T":
//                System.out.println("You drive a truck.");
//                break;
//            default:
//                System.out.println("You do not drive a vehicle.");
//        }
//
//
//


//        Part 3-------------------
//        int[] myArray = new int[30];


//        for (int intName = 0; intName < myArray.length ; intName ++) {
//            myArray[intName] = intName;
//            System.out.println(String.format("Array index is now %d", intName));
//            System.out.println(String.format("IntValue is now %d", myArray[intName]));
//        }
//
//        for (int intName: myArray) {
//            System.out.println("Enhanced for: "  + intName);
//        }

//

//        for (int intName = 0; intName < myArray.length; intName++) {
//            myArray[intName] = (intName + 1) * 2;
//            System.out.println(String.format("Array index is now %d", intName));
//            System.out.println(String.format("IntValue is now %d", myArray[intName]));
//        }

//        for (int intName : myArray) {
//            System.out.println("Enhanced for: " + intName);
//        }

//        for (int intName = myArray.length - 1; intName >= 0; intName -- )
//        {
//            System.out.println(myArray.length);
//        System.out.println(myArray[intName]);
//
//        }

//      Part 4-------------
//        int[] myArray = new int[30];
//
//        for (int i = myArray.length - 1; i >= 0; i--) {
//            myArray[i] = i;
//            System.out.println(i);
//            System.out.println(myArray[i]);
//        }
//
//        int i = 0;
//        while (i < myArray.length) {
//            myArray[i]=i;
//            System.out.println(i);
//            i++;
//        }
//        i = myArray.length -1;
//        while (i >= 0) {
//            myArray[i]=i;
//            System.out.println(i);
//            i--;
            System.out.print("Do you want to answer the questions again? Enter Y or N: ");
            answer = scanner.next().toUpperCase().charAt(0);
        } while (answer == 'Y');

        System.out.print("Do you want to answer the questions again? Enter Y or N: ");
        Five(10);
    }

    public static void Five(int b) {
        int[] myArray = new int[30];
        for (int i = 0; i < myArray.length; i++) {
            myArray[i] = i;
            System.out.println("int i " + i + "= myArray[" + myArray[i] + "]");
        }
        for (int item : myArray) {
            if (item == b) break;

            if (item % 2 != 0) {
                continue;
            } else if (item % 2 == 0) {
                System.out.println(item);

                int[] myArray = new int[30];
                int sum=0;
                for (int i = 0; i < myArray.length; i++) {
                    myArray[i] = i;
                    System.out.println("int i " + i + "= myArray[" + myArray[i] + "]");
                }
                for (int item : myArray) {
                    if (item == b) {
                        //System.out.println("The total sum of even numbers is "+sum);
                        break;
                    }
                    if (item%2!=0) {
                        System.out.println(item);
                    }
                    else if(item%2 ==0) {
                        //System.out.println(sum += item);
                        //System.out.println(String.format("The previous sum %d plus the current value %d equals %d", sum, item, sum+item));
                        sum+=item;
                    }
                } return sum;
            }
        }
    }
}




