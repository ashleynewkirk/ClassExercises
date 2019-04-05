/*function needs (){
    const needs = 'hugs';
    return closure; 
    function closure (){
       console.log('someText ' + needs);

    }

}
needs ()();
*/
//https://medium.freecodecamp.org/javascript-closures-simplified-d0d23fa06ba4
function outer() {
    var b = 10; // first variable b is created and set to 10 and limited to outer scope. 1)
    function inner() { // just a declaration - nothing "happens"
        var a = 20; 
        console.log (a+b)
    }
    return inner; // return inner happens after variable b is created;  will look for variable first, but will see funciton named inner is available. does not execute or solve/ just returns so that you have access to it.  2)
}
var x = outer (); 
var y = outer ();