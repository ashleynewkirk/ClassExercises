import java.util.Random;
import java.util.Scanner;

public class RPS {

    public static void main(String[] args) {
        String personPlay;
        String computerPlay = "";
        int computerInt;
        //String response;


        Scanner scan = new Scanner(System.in);
        Random generator = new Random();

        System.out.println("Hey, let's play Rock, Paper, Scissors!\n" +
                "Please enter a move.\n" + "Rock = R, Paper" +
                "= P, and Scissors = S.");

        System.out.println();


        computerInt = generator.nextInt(3) + 1;

        if (computerInt == 1)
            computerPlay = "R";
        else if (computerInt == 2)
            computerPlay = "P";
        else if (computerInt == 3)
            computerPlay = "S";


        System.out.println("Enter your play: ");
        personPlay = scan.next();


        personPlay = personPlay.toUpperCase();


        System.out.println("Computer play is: " + computerPlay);


        if (personPlay.equals(computerPlay)) {
            System.out.println("It's a tie!");
        } else if (personPlay.equals("R") && computerPlay.equals("S")) {
            System.out.println("Rock crushes scissors. Person wins!!");
        } else if (personPlay.equals("P") && computerPlay.equals("R")) {
            System.out.println("Paper covers rock. Person wins!!");
        } else if (personPlay.equals("S") && computerPlay.equals("P")) {
            System.out.println("Scissor cuts paper. Person wins!!");
        } else if (computerPlay.equals("R") && personPlay.equals("S")) {
            System.out.println("Rock crushes scissors. Computer wins!!");
        } else if (computerPlay.equals("P") && personPlay.equals("R")) {
            System.out.println("Paper covers rock. Computer wins!!");
        } else if (computerPlay.equals("S") && personPlay.equals("P")) {
            System.out.println("Scissor cuts paper. Computer wins!!");
        }else {
            System.out.println("Invalid user input.");
        }
    }
}




//
//    if (I suck) {
//        I need to git gud
//            } else if (I rock) {
//        I'm gud
//            }
