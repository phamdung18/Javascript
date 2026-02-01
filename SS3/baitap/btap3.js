let n;
let userName;
let nameBook;
let borrowDate;
let extendDate;
let sum;
let countFaile = 0;
let countTrue = 0;

n = prompt("có yêu cầu gia hạn mới không (có hay không): ");

if (n === "không"){
    console.log("Không có yêu cầu gia hạn");
} else{
    userName = prompt("Tên bạn đọc: ");
    nameBook = prompt("Tên sách: ");
    borrowDate = +prompt("Số ngày đã mượn hiện tại (số nguyên ≥ 1)");
    extendDate = +prompt("Số ngày muốn gia hạn thêm (số nguyên ≥ 1)");

    sum = borrowDate + extendDate;

    if (sum > 60){
        console.log("Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa");
        countFaile;
    } else if (borrowDate > 45){
        console.log("Không được gia hạn: Đã mượn quá lâu (>45 ngày)");
        countFaile++;
    } else{
        console.log("Gia hạn thành công");
        countTrue++;
    }
}
console.log(`Số lần gia hạn thành công là ${countTrue}`);
console.log(`Số lần gia hạn không thành công ${countFaile}`);


