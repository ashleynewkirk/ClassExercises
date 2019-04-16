//"BASIC STRUCTURE OF PROMISE"

let p = new Promise(function(resolve, reject) {  
    if (/* condition */) {
       resolve(/* value */);  // fulfilled successfully
    }
    else {
       reject(/* reason */);  // error, rejected
    }
  });
  
  
  //These are the same statements
  .then((val) => console.log("fulfilled"), val)
        (err) => console.log("rejected", err))
  
  .then((val) => console.log("fulfilled"), val)
  .catch((err) => console.log("rejected", err)