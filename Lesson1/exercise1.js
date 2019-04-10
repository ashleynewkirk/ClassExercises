/* Create an array to represent your shopping list with the following items: 'pop tarts', 'ramen noodles', 'chips', 'salsa', and 'coffee'.
Add 'fruit loops' to the list.
Update 'coffee' to 'fair trade coffee'
Replace 'chips' and 'salsa' with 'rice' and 'beans'
Create an empty array to represent your shopping cart.
Remove the last item from your shopping list and add it to your cart
Remove the first item from your shopping list and add it to the cart
Write a 'while' loop that takes items from your shopping list and moves them to your cart until there are no items left on the list.
Sort the items in your cart alphabetically... backwards
Print the list of items in your shopping cart to the console as comma separated string. */

var shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];

shoppingList.push('fruit loops');

shoppingList.splice(4,1,'fair trade coffee');

shoppingList.splice(2,2, 'rice', 'beans');

var shoppingCart = []

var shoppingCart = [ shoppingList.pop(5) + ', ' + shoppingList.shift(0)];

var i = shoppingList.length; 
while (i >= 0) {
var shoppingCart = [shoppingList.pop(i) + ', '];
}

console.log(shoppingList);
console.log(shoppingCart);


