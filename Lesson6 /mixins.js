var userProfile = { 
    name: 'Ashley',        
    address: '123 Jimmy Way',
    city: 'Jimmyville',
    state: 'Jimmolina',
    zipcode: 12345,
    avatar: 'sloth'
}
function getProfileUpdate(address) {  
   return {
    address: '456 Dang Way' //captures new address 
    }
}
function updateProfile(){
    return Object.assign (userProfile, getProfileUpdate()) //assigns new address 
} 
   console.log(userProfile) //logs original userProfile 
    updateProfile(); //calls function 
    console.log(userProfile); //logs new userProfile after update profile function is run
   
