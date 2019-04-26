const move = false

const willIMove = new Promise(
    function (resolve, reject){
    if (move == true) {
       resolve(console.log("I am moving!"));
    } else {
        reject(console.log("I'm not moving!"));
    }

    }
    
)


