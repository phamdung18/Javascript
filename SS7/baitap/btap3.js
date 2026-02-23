let player = [];
let positions = ["Thủ môn", "Hậu vệ", "Tiền vệ", "Tiền đạo"];
let n = parseInt(prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?"));

for (let i = 0; i < n; i++){
    let id = prompt("Nhập mã cầu thủ:");
    for (let j = 0; j < player.length; j++){
        let part = player[j].split("-");
        if (part[0] == id){
            alert("Mã đã tồn tại! Nhập lại.");
            id = prompt("Nhập lại mã cầu thủ:");
            j = -1; 
        }
    }
    let name = prompt("Nhập tên cầu thủ:");
    while (name == ""){
        name = prompt("Tên không được để trống. Nhập lại:");
    }
    let posNumber = parseInt(prompt(
        "Vị trí (1: Thủ môn 2: Hậu vệ 3: Tiền vệ 4: Tiền đạo):"
    ));
    let position = positions[posNumber - 1];
    let playerInfo = id + "-" + name + "-" + position;
    player.push(playerInfo);
}
function printTeamRoster(){
    console.log("Danh sách đội bóng:");
    for (let i = 0; i < player.length; i++){
        let part = player[i].split("-");
        console.log(
            (i + 1) + ". Mã: " + part[0] +
            " | Tên: " + part[1] +
            " | Vị trí: " + part[2]
        );
    }
}
function pushPlayer(id, name, position){
    let playerInfo = id + "-" + name + "-" + position;
    player.push(playerInfo);
}
printTeamRoster();