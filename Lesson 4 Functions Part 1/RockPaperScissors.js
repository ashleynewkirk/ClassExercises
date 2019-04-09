const hand = ["rock","paper","scissors"]; // constants that won't change; same options everytime 

function getHand(){  // name of function for hand played
    return hand[parseInt(Math.random()*10)%3]; // the randomly generated hand that is returned when the getHand function is run

}

var player1 = {  // creating player data as an object makes it easier to access info 
    name : 'Onyx',
    getHand : getHand,
    hand: null, // no value assigned...yet
    score: 0,
}
var player2 = {
    name : 'Topaz',
    getHand : getHand,
    hand: null,
    score: 0,
}

const winCondition = {  
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
};

function playRound(player1, player2, hand, winCondition) {
    player1.hand = player1.getHand(hand); //Player 1 hand = return from getHand function 
    player2.hand = player2.getHand(hand);//Player 2 hand = return from getHand function 
    console.log(`${player1.name} plays ${player1.hand}, and ${player2.name} plays ${player2.hand}`);
    
   if (player1.hand == player2.hand){ // if player 1 hand is loosely equal to player 2's hand
        console.log("This round is a tie.")
        return null; // do not return value since tie does not affect player score 
    }
    else{
        if (winCondition[player1.hand]==player2.hand){ //avoids repeating code blocks/ see RPS simple for example 
            console.log(`${player1.name} wins this round.`); 
            return player1;
        }
        else{
            console.log(`${player2.name} wins this round.`);
            return player2;
        }
    }
}
function addWins(player) {
    if(player !== null){
        player.score++;
    }
}


function playGame(player1, player2, hand, winCondition, playUntil) {
    console.log(`Play until ${playUntil} games won. Start!!!`);
    while(player1.score < playUntil && player2.score < playUntil) {
        addWins(playRound(player1, player2, hand, winCondition));
        console.log(`${player1.name} Score: ${player1.score}   ${player2.name} Score: ${player2.score}`)
    }
}


playGame(player1, player2, hand, winCondition, 5);
    if(player1.score>player2.score){
        console.log(`${player1.name}, with a score of ${player1.score} is the RPS Champion!!!`);
    }else{
    console.log(`${player2.name}, with a score of ${player2.score} is the RPS Champion!!!`);
};
console.log(player1.name+" : "+player1.score);
console.log(player2.name+" : "+player2.score);
