let playerIds = ["P001", "P002", "P003", "P004", "P005"];
let playerName = [
    "Nguyễn Văn A",
    "Trần Thị B",
    "Lê Văn C",
    "Phạm Văn D",
    "Hoàng Thị E"
];
let playerJerseyNumber = [10, 7, 8, 9, 11];

function printTeamRoster(){
    console.log("Danh sách đội bóng:");
    for (let i = 0; i < playerIds.length; i++){
        console.log(
            (i + 1) + ". " +
            playerIds[i] + " - " +
            playerName[i] + " - " +
            playerJerseyNumber[i]
        );
    }
}
function updatePlayerNameAndJersey(playerId, newName, newJerseyNumber){
    let found = false;
    for (let i = 0; i < playerIds.length; i++){
        if (playerIds[i] == playerId){
            playerName[i] = newName;
            playerJerseyNumber[i] = newJerseyNumber;
            found = true;
        }
    }
    return found;
}

let id = prompt("Nhập mã cầu thủ muốn cập nhật:");
let check = false;
for (let i = 0; i < playerIds.length; i++){
    if (playerIds[i] == id) {
        check = true;
    }
}
if (check == true){
    let newName = prompt("Nhập tên mới:");
    let newNumber = parseInt(prompt("Nhập số áo mới (1-99):"));
    let kq = updatePlayerNameAndJersey(id, newName, newNumber);
    if (kq == true){
        console.log("Cập nhật thành công!");
        printTeamRoster();
    }

} else{
    console.log("Không tìm thấy cầu thủ với mã này!");
}