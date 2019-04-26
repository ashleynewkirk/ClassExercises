//Arrow Functions 
/*
const teacher = {
    name: "Jimmy", 
    speak: function() {
        //bind a function to a specific context
        let boundFunction = function (){
        console.log('later my name is' + this.name);
        }.bind(this);
    // bound function will always run in bound context.
        setTimeout(boundFunction, 1000);
}
};
*/
//example using arrow
const teacher = {
    name: "Jimmy", 
    speak: function() {
        //bind a function to a specific context
        let boundFunction = () => { //remove function keyword; lexical binding 
        console.log('later my name is' + this.name);
        };
    // bound function will always run in bound context.
        setTimeout(boundFunction, 1000);
    }
};
teacher.speak(); 

//Lexical binding - they bind to the scope where defined, not where they are used

let students = [
    {name: 'Hugo'},
    {name: 'Candace'},
    {name: 'Taylor'},
    {name: 'Dmitri'}
];

let names = students.map((student) => student.name);
//same as 
let names = students.map((student) => {
    return student.name
})

console.log(names);