let players = [
    "Messi",
    "Ronaldo",
    "Neymar",
    "De Bruyne",
    "Kante",
    "Van Dijk",
    "Alisson"
];
function getUpperNames(playerNames){
    let newArray = playerNames.map(function(name){
        return name.toUpperCase();
    });
    return newArray; 
}
let result = getUpperNames(players);
console.log(result);