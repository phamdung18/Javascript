let player = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn"
];
function getAllPositions(){
    let result = [];
    for (let i = 0; i < player.length; i++){
        let part = player[i].split("-");
        let position = part[2];
        if (result.indexOf(position) == -1){
            result.push(position);
        }
    }
    return result;
}
function findPlayersWithLongestName(){
    let longestName = "";
    let maxLength = 0;
    for (let i = 0; i < player.length; i++){
        let part = player[i].split("-");
        let name = part[1];
        if (name.length > maxLength){
            maxLength = name.length;
            longestName = name;
        }
    }
    return longestName;
}
function countPlayersStartingWithLetter(letter){
    let count = 0;
    for (let i = 0; i < player.length; i++){
        let part = player[i].split("-");
        let name = part[1];
        if (name.toLowerCase().charAt(0) == letter.toLowerCase()){
            count++;
        }
    }
    return count;
}

console.log("Các vị trí trong đội:", getAllPositions());
console.log("Cầu thủ có tên dài nhất:", findPlayersWithLongestName());
console.log("Số cầu thủ bắt đầu bằng chữ 'H':", countPlayersStartingWithLetter("H"));