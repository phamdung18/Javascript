let players = [
    "Messi - Forward - 30 - 15 - 40",
    "Ronaldo - Forward - 25 - 10 - 34",
    "Neymar - Forward - 18 - 20 - 30",
    "De Bruyne - Midfielder - 8 - 25 - 35",
    "Van Dijk - Defender - 5 - 3 - 33",
    "Alisson - Goalkeeper - 0 - 1 - 38"
];
let minGoals = 5;

function reportByPosition(players){
    console.log("BÁO CÁO HIỆU SUẤT THEO VỊ TRÍ\n");
    let grouped = players
        .map(function(player){
            let parts = player.split(" - ");
            return {
                name: parts[0],
                position: parts[1],
                goals: Number(parts[2]),
                assists: Number(parts[3]),
                matches: Number(parts[4])
            };
        })
        .filter(function(player){
            return player.goals >= minGoals;
        })
        .reduce(function(acc, player){
            if (!acc[player.position]){
                acc[player.position] ={
                    count: 0,
                    totalGoals: 0,
                    totalAssists: 0,
                    totalMatches: 0
                };
            }
            acc[player.position].count += 1;
            acc[player.position].totalGoals += player.goals;
            acc[player.position].totalAssists += player.assists;
            acc[player.position].totalMatches += player.matches;
            return acc;
        }, {});
    Object.keys(grouped).forEach(function(position){
        let data = grouped[position];
        let avg =
            (data.totalGoals + data.totalAssists) /
            data.totalMatches;
        console.log(position + ":");
        console.log("- Số cầu thủ: " + data.count);
        console.log("- Tổng bàn thắng: " + data.totalGoals);
        console.log("- Tổng kiến tạo: " + data.totalAssists);
        console.log("- Tổng số trận: " + data.totalMatches);
        console.log("- Trung bình hiệu suất/trận: " + avg.toFixed(2));
        console.log("");
    });
    console.log("------------------------");
    let totalTeamGoals = Object.values(grouped)
        .reduce(function(sum, pos){
            return sum + pos.totalGoals;
        }, 0);
    console.log("Tổng bàn thắng toàn đội : " + totalTeamGoals);
}
reportByPosition(players);