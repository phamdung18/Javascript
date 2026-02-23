let playerId = [];
let playerPosition = [];
let position = ["Thủ môn", "Hậu vệ", "Tiền vệ", "Tiền đạo"];
let n = parseInt(prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?"));

for (let i = 0; i < n; i++){
    console.log("Nhập cầu thủ " + (i + 1));
    let id = prompt("Mã cầu thủ:");
    for (let j = 0; j < playerId.length; j++){
        if (id == playerId[j]){
            alert("Mã đã tồn tại! Nhập lại.");
            id = prompt("Nhập lại mã cầu thủ:");
            j = -1; 
        }
    }
    let posNumber = parseInt(prompt(
        "Vị trí (1: Thủ môn 2: Hậu vệ 3: Tiền vệ 4: Tiền đạo):"
    ));
    playerId.push(id);
    playerPosition.push(position[posNumber - 1]);
}
function printTeamRoster(){
    console.log("Đội bóng hiện tại (" + playerId.length + " cầu thủ):");
    for (let i = 0; i < playerId.length; i++) {
        console.log((i + 1) + ". " + playerId[i] + " - " + playerPosition[i]);
    }
}
function findPlayersByPosition(position){
    let result = [];
    for (let i = 0; i < playerPosition.length; i++){
        if (playerPosition[i] == position){
            result.push(i);
        }
    }
    return result;
}

let searchNumber = parseInt(prompt(
    "Nhập vị trí cầu thủ muốn đếm số lượng (1: Thủ môn , 2: Hậu vệ ,3: Tiền vệ, 4: Tiền đạo):"
));
let searchPosition = position[searchNumber - 1];

printTeamRoster();
let indexe = findPlayersByPosition(searchPosition);
console.log("Số cầu thủ ở vị trí " + searchPosition + ": " + indexe.length);
console.log("Các chỉ số cầu thủ ở vị trí " + searchPosition + ": " + indexe);