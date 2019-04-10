var billAmount = 86.50 //set bill amount to variable

function gratuity(){ // function to calculate tip 
  return billAmount * .20  //must have return amount to store value in memory 
   
}

function totalWithGrat() { //function to add stored gratuity amount to bill amount for total
return gratuity() + billAmount
}

console.log(totalWithGrat()) //calls function and consoles out result 
