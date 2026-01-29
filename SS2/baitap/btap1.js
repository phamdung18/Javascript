const nameBook = prompt("Nhập tên cuốn sách: ");
const authorBook = prompt("Nhập tên tác giả: ");
const publish = +prompt("Nhập năm của cuốn sách: ");

const Year = new Date().getFullYear();

if (publish === Year) {
    console.log("Đây là sách mới!");

} else if (publish >= (Year - 5)) {
    console.log("Sách khá mới");

} else {
    console.log("Sách đã cũ");

}