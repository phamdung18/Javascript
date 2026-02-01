let password = "";
password = prompt("Moi nhap mat khau:");
let count = 0;
let flag = true;
while (password != "admin123"){
    if(count == 2){
        flag = false;
        break;
    }
    count++;
    password = prompt("Mat khau sai xin moi nhap lai!");
}

if (flag){
    console.log("Xin chao admin moi chon chuc nang")
} else {
    console.log("Xin loi ban da nhap qua so lan!!")
}