let player = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn"
];
function printTeamRoster(){
    console.log("Danh sách đội bóng:");
    for (let i = 0; i < player.length; i++){
        let part = player[i].split("-");
        console.log((i + 1) + ". " + part[0] + " | " + part[1] + " | " + part[2]);
    }
}
function countPlayerByPostion(player){
    let result = {};
    for (let i = 0; i < player.length; i++){
        let part = players[i].split("-");
        let position = part[2];
        if (result[position] == undefined){
            result[position] = 1;
        } else{
            result[position] = result[position] + 1;
        }
    }
    return result;
}
function hasGoalkeeper(){
    for (let i = 0; i < player.length; i++){
        let part = player[i].split("-");
        if (part[2] == "Thủ môn")   {
            return true;
        }
    }
    return false;
}
printTeamRoster();
let count = countPlayerByPostion(player);
console.log("Số lượng theo vị trí:", count);
let check = hasGoalkeeper();
console.log("Đội có thủ môn không?", check);