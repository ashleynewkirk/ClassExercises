import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        System.out.println("Hello World!");

        int [] name = new int [5];
        int [] name2 = new int [5*2];

        ArrayList <Integer> name3 = new ArrayList<>();

        name3.add(12);
        for (int i = 0; i < 400000; i++)

            name3.add(i);

        System.out.println(name3.size());
        System.out.println(name3.get(2000));
        name3.set(3702, 495);
        Integer storeit = name3.remove(3702);
        System.out.println(storeit);

    }
    static void takesArrayList(ArrayList <Integer>  doodle) {
        int total =0;
        for (Integer name: doodle) {
            total += name;
        }
        system
    }
}
