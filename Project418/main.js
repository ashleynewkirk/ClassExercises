// const brain = require ("brain.js")

// const network = new brain.NeuralNetwork(); 

// network.train([
//     {input: {height: 60, weight: 150}, output: {adult: 1}},
//     {input: {height: 100, weight: 250}, output: {adult: 1}},
//     {input: {height: 68, weight: 200}, output: {adult: 1}},
//     {input: {height: 12, weight: 20}, output: {child: 0}},
//     {input: {height: 30, weight: 60}, output: {child: 0}},
//     {input: {height: 24, weight: 50}, output: {child: 0}}
// ]);
// const result = network.run([20,30]);
// console.log(result);


const brain = require ("brain.js")

const network = new brain.NeuralNetwork(); 

network.train([
    {input: {r:0.62 , g:0.72 , b:.88 }, output: {light:1 }},
    {input: {r:0.1 , g:.84 , b:.72 }, output: {light:1 }},
    {input: {r: .33, g: .24 , b: .29 }, output: {dark: 1}},
    {input: {r: .74, g: .78, b: .86 }, output: {light: 1}},
    {input: {r: .31, g: .35, b: .41 }, output: {dark: 1}},
]);

const result = network.run([r:1, b:.99, 0]);
console.log(result);
document.getElementById("example"),addEventListener(`click`, function(){

})


