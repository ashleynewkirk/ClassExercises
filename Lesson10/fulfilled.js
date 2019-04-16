var promise = new Promise(function (fulfill, reject) { 
    setTimeout (function fulfilled(){
   console.log('FULFILLED!')
  },
  300);
});
