let readerCardId = [];
let readerName = [];
let borrowedBookCode = [];
let overdueDay = [];

let n = parseInt(prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?"));

for (let i=0;i<n;i++){
    let id = prompt("Nhập mã thẻ bạn đọc:");
    let name = prompt("Nhập tên bạn đọc:");
    let books = prompt("Nhập các mã sách đang mượn (cách nhau bởi dấu phẩy):");
    let days = parseInt(prompt("Nhập số ngày quá hạn:"));
    readerCardId.push(id);
    readerName.push(name);
    borrowedBookCode.push(books);
    overdueDay.push(days);
}
let count10 = 0;

for (let i=0;i<overdueDay.length;i++){
    if (overdueDay[i] >= 10) {
        count10++;
    }
    }
console.log("Tổng số bạn đọc quá hạn ≥ 10 ngày:", count10);
console.log("Các bạn đọc mượn cả sách JS và PYT:");

for (let i=0;i<borrowedBookCode.length;i++){
    if (borrowedBookCode[i].includes("JS") && borrowedBookCode[i].includes("PYT")) {
        console.log(readerCardIds[i]);
    }
}
let maxIndex = 0;
for (let i=1;i<overdueDay.length;i++){
    if (overdueDay[i] > overdueDay[maxIndex]){
        maxIndex = i;
    }
}
console.log("Bạn đọc quá hạn nhiều nhất:",readerName[maxIndex] + " (" + overdueDay[maxIndex] + " ngày)");
let count7 = 0;
for (let i=0;i<overdueDay.length;i++){
    if (overdueDay[i] >= 7) {
        count7++;
    }
}
if (count7 === 0){
    console.log("Tình hình trả sách hôm nay khá tốt!");
} else if (count7 <= 4){
    console.log("Cần gửi nhắc nhở cho một số bạn đọc!");
} else{
    console.log("Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
}
