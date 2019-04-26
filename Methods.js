/*function add() {
    console.log("arguments object:", arguments);
    
    var numbers = Array.prototype.slice.call(arguments);
    
    var sum = 0;
    
    numbers.forEach(function (number){
        sum += number;
    });
    return sum;
    
}
console.log(add(1,2,3,4,5,6,7,8)); */

let add = (...numbers) => {
    console.log("rest parameters", numbers);

    let sum =0;
    
    numbers.forEach(function (number) {
        sum += number; 
    
    });
    return sum; 
}
console.log(add (1,2,3,4,5,6,7,8));

let add=(...numbers)=>numbers.reduce((sum,number)=>sum+=number,0);
console.log(add(1,2,3,4,5,6,7,8));