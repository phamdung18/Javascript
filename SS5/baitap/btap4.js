let bookId = [];
let nameBook = [];
let bookStatus = [];

let n = parseInt(prompt("Có bao nhiêu cuốn sách cần kiểm tra?"));

for (let i=0;i<n;i++) {
    bookId.push(prompt("Nhập mã sách:"));
    nameBook.push(prompt("Nhập tên sách:"));

    let c = parseInt(prompt("Tình trạng:\n1.Hỏng nhẹ\n2.Hỏng nặng\n3.Cần sửa gấp"));
    if (c ===1) bookStatus.push("Hỏng nhẹ");
    if (c ===2) bookStatus.push("Hỏng nặng");
    if (c === 3) bookStatus.push("Cần sửa gấp");
}
function show() {
    console.log("Danh sách hiện tại:");
    for (let i=0;i<bookId.length;i++) {
        console.log((i + 1)+ ". "+
            bookId[i]+ " - "+
            nameBook[i]+ " - "+
            bookStatus[i]
        );
    }
}
show();
while (true) {
    let choose = parseInt(prompt("1.Sửa tình trạng\n2.Xóa sách\n0.Kết thúc"));
    if (choose === 0) break;
    if (choose === 1) {
        let id = prompt("Nhập mã sách cần sửa:");
        for (let i=0;i<bookId.length;i++) {
            if (bookId[i] === id) {
                let m = parseInt(prompt("1.Hỏng nhẹ\n2.Hỏng nặng\n3.Cần sửa gấp\n4.Đã sửa xong\n5.Loại bỏ"));
                if (m ===1) bookStatus[i] = "Hỏng nhẹ";
                if (m === 2) bookStatus[i] = "Hỏng nặng";
                if (m === 3) bookStatus[i] = "Cần sửa gấp";
                if (m === 4) bookStatus[i] = "Đã sửa xong";
                if (m === 5) bookStatus[i] = "Loại bỏ";
            }
        }
        show();
    }
    if (choose === 2) {
        let id = prompt("Nhập mã sách cần xóa:");
        for (let i=0;i<bookId.length;i++) {
            if (bookId[i] === id) {
                bookId.splice(i, 1);
                nameBook.splice(i, 1);
                bookStatus.splice(i, 1);
                break;
            }
        }
        show();
    }
    }
let fixed =0, removed =0;
for (let i=0;i<bookStatus.length;i++) {
    if (bookStatus[i] === "Đã sửa xong") 
        fixed++;
    if (bookStatus[i] === "Loại bỏ") 
          removed++;
}
console.log("Tổng sách còn lại:", bookId.length);
console.log("Đã sửa xong:", fixed);
console.log("Loại bỏ:", removed);
