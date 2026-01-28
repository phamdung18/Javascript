let bookName = prompt("Mời nhập tên sách").trim().toUpperCase();
console.log("bookName",bookName);


let bookAuthor = prompt ("Mời nhập tên tác giả").toUpperCase();

let year = prompt ("Nhập năm xuất bản");

let bookId= bookAuthor.trim().slice(0,3) + year + (Math.floor(Math.random()*1000)+1);
console.log("bookId",bookId);

let price = prompt ("Nhập giá tiền");
let quantity = prompt ("Số lượng nhập kho");

let bookYear = new Date().getFullYear()-year;
console.log("Sách đã xuất bản được số năm: ",bookYear);
let total= quantity*price;

console.log(` Tổng giá trị nhập kho là: ${total}`)