let players = [
    "Messi - Forward - 30",
    "Ronaldo - Forward - 28",
    "Neymar - Forward - 20",
    "De Bruyne - Midfielder - 10",
    "Kante - Midfielder - 5",
    "Van Dijk - Defender - 3",
    "Alisson - Goalkeeper - 0"
];
function getReversedNames(players){
    let names = players.map(function(player){
        let parts = player.split(" - ");
        return parts[0]; 
    });
    let reversedNames = names.reverse();
    return reversedNames;
}

console.log(getReversedNames(players));