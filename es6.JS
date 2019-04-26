//ES6 allows backticks and enter as line breaks 

/*console.log(`Hello! I'm a string
continues on this line`);

console.log("string text 1/n"+ 
"string text2");

const name = "Ashley"; 
const day = "Wednesday";
const instructor = {
    name: "Pasha",
    lesson: "ES6",
    greet: function (){
        return `Hello ${this.name}...this lesson is ${this.lesson}.`
    }
}

console.log("Hello" + name + " I hope you have a great day on " + day);

//below is an example of interpolation - string concatenation is no longer necesary
console.log(`Hello ${name} I hope you have a great ${day}!`);

console.log(`Hello ${instructor.name}...this lesson is ${instructor.lesson}.`)
console.log(instructor.greet());


function foo (){
    let x = true; 
    if (x) {
        //var usingVar = 'im usin var';
        let usingVar = 'im usin let';
        
    }
    console.log(usingVar);
}
foo(); // undefined because let has local scope.


//can't rename const, but const can be modified. 
const instructors = ["Jimmy", "Christopher"];
instructors.push("Jack", "Jill", "Pasha");

console.log(instructors); */

function hello(name) {
    name = name || 'Mystery Person';
    console.log("Hello " + name + '!')
}
hello("Bobby");
hello();