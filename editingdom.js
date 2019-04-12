

//Get the header element
var header = document.getElementsByTagName("header").innerHTML;
console.log(header);
//Get all the section elements
var section = document.querySelectorAll("section")
//Get the section element with class="current"
var current = document.querySelectorAll("section.current")
//Get the section that comes after the current section
var afterCurrent = current.nextElementSibling
console.log(afterCurrent);
//Get the h2 node from the section before the 'current' section
var beforeCurrent = current.previousElementSibling
//Get the div that contains the section that has an h2 with a class of 'highlight'

//Get all the sections that contain an H2 (using a single statement); 