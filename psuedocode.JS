/* Write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.


    for n (1-00)
    if n mod 15 = 0 print "fizzbuzz"
    else if n mod 3 = 0 print "fizz"
    else if n mod 5 = 0 print "buzz"
    else if return n */

    for(n=0; n <= 100; n++) {
        if (n%15 ==0)
            console.log ("fizzbuzz");
        else if (n % 5 == 0)
            console.log ("buzz");
        else if (n % 3 == 0)
            console.log ("fizz");
        else 
            console.log(n);
        }
    //  

    // for (var i = 1; i < 100; i++) {
    //     if (i % 15 == 0)
    //         console.log("FizzBuzz");
     
    //     else if (i % 5 == 0) console.log("Fizz");
    //     else if (i % 3 == 0) console.log("Buzz");
    //     else console.log(i);





