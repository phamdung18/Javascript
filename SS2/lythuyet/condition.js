/*
    CÂU ĐIỀU KIỆN
    1. IF-ELSE
    2. IF-ELSE IF bậc thang




*/
let age = 19
if (age){
    console.log("đủ tuổi xem phim");
} else {
    console.log("không đủ tuổi xem phim");
}


let day = prompt("mời nhập ngày trong tuần");
if(day==2){
    console.log("ngày thứ 2");
} else if (day==3){
    console.log("ngày thứ 3");
} else if (day==4){
    console.log("ngày thứ 4");
}

let month = prompt("mời nhập tháng trong năm:")
switch (month) {
    case 1:
        console.log("tháng 2 có 28||29 ngày");
        break;
    case 2:
        console.log("tháng 3 có 31 ngày");
        break;
    case 3: 
        console.log("tháng 4 có 30 ngày");
        break;
    default:
        console.log("tháng không tồn tại trong năm");
        break;
}