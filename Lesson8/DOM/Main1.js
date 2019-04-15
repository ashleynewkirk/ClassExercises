var header = document.getElementsByTagName("header")  
 //gets all the elements with the <header> tag
var section = document.querySelectorAll("section")   
//gets all of the elements with the <section> tag
//could also be var = section doument.getElementsbyId("section")??

var current = document.querySelector('section.current')   
//gets the first <section> element with the class of 'current'
console.log(current);
var afterCurrent = current.nextElementSibling   //gets the next sibling of 'current', the variable that we just defined
console.log(afterCurrent);
var beforeHTwo = current.previousElementSibling.children[0]   //goes to the proceding sibling of 'current' and gets the first child element
console.log(beforeHTwo);
var what = document.querySelector('h2.highlight').parentNode.parentNode   //finds the <h2> element with the class of 'highlight' & goes up 2 parent Nodes
console.log(what);
var who = (Array.from(document.querySelectorAll('section > h2'))).map(function(flomo){return flomo.parentNode}) //??
console.log(who);