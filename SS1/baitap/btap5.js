const nameBook = prompt("Nhập tên sách:");
const yearBook = prompt("Nhập năm xuất bản:");
const presentYear = prompt("Nhập năm hiện tại");
const ageBook = presentYear - yearBook;

console.log("Sách", nameBook);
console.log("Năm xuất bản:", yearBook);
console.log("Tuổi của sách", ageBook);
