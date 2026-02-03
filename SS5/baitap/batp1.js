let book = [];
let count = parseInt(prompt("Bạn muốn trả bao nhiêu cuốn sách?"));
for (let i=1;i<=count;i++){
    let name = prompt("Nhập tên cuốn sách thứ" + i + ":");
    book.push(name);
}
console.log("Tổng số sách đã được trả:",book.length);
console.log("Danh sách sách đã trả:");
for (let i=0;i<book.length;i++){
    console.log((i + 1) + "." + book[i]);
}
