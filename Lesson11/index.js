const moment = require('moment');
//const mocha = require('mocha');
//const chai = require('chai');
const request = require('request-promise');


function logResponse(resp) {
    console.log(resp, new moment().format('h:mm:ss a'));
}
let id = setInterval(function() {
    request('http://jsonplaceholder.typicode.com/posts/1').then(logResponse)}, 3000)
    
    setTimeout(function(){
        clearInterval(id)
    }, 9500)


