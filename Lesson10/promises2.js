let userName = document.quertySelector ('input#userName')
let submit = document.quertySelector('input[type="submit"]')
submit.addEventListener ('click',event => {

})

function findUser(userName){
    return new Promise(function (resolve, reject) {
        $.get('http://jsonplaceholdertypicode.com/users?username=') + userName,
        function(user) {
            
        }
    })

}