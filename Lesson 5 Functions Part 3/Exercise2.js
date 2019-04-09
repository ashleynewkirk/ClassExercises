

var players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
    {firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2} ]; 
    

    var playerMike = players.find(function(players) {
    return players.firstName == "Mike";
});
console.log(playerMike.firstName);

var rbs = players.filter(function(players){
    return players.position == 'RB';
});

console.log(rbs);

var lastName = players.map(function(players){
    return players.lastName;
});

console.log(lastName);

var fullNames = players.filter(function(student) {
    return (players.touchdowns > 5)

}); 
console.log(fullNames);

//var runningbacks = players.find(function

/* - Find a player with the name 'Mike'
- Get an array of all players with position 'RB'
- Get an array of all the players lastNames
- Get an array of the full names of all the runningbacks with more than 5 touchdowns
- Get the number of touchdowns scored by Runningbacks */
