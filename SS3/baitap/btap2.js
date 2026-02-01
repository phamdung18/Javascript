let n;
let userName;
let bookName;
let borrowDate;
let lateCount = 0;

n = +prompt("Hôm nay có bao nhiêu lượt trả sách?");

for (let i=0;i<n;i++) {
    userName = prompt("Tên người trả:");
    bookName = prompt("Tên sách:");
    borrowDate = +prompt("Số ngày đã mượn (>= 1):");

    if (borrowDate <= 14) {
        console.log("Trả đúng hạn");
    } else if (15 <= borrowDate && borrowDate <= 21) {
        console.log("Trả muộn nhẹ");
        console.log("Phạt nhắc nhở");
        lateCount++;
    } else {
        console.log("Quá hạn nghiêm trọng");
        console.log("Cần ghi biên bản phạt");
        lateCount++;
    }
}
console.log(`Tổng số lượt trả sách: ${n}`);
console.log(`Số lượt trả muộn (>= 15 ngày): ${lateCount}`);
