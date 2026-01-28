// Khai báo biến: vả, let , const
var userName = "Nguyễn Tiến Đạt"
console.log("username trước khi khai báo lại =", userName);

// Khai báo lại giá trị (Có)
var userName = "Nguyễn Tiến Tít"
console.log("username sau khi khai báo lại =", userName);

//Gán lại giá trị (Có)
userName = "Nguyễn Tiến Tippi"
console.log("username sau khi khai báo lại giá trị=", userName);

// Phạm vi (toàn cục)

// Hoisting ( sử dụng biến trước khi mà chúng ta khai báo, tuy nhiên giá trị của nó là indefined)
age = 10;
console.log("age: ", age);
var age = 30;

// Nhược điểm: code khó bảo trì, khó kiểm soát phạm vi, khó phát hiện lỗi

//Từ năm 2015 js phát hành phiên bản ES6 (thêm 2 từ khóa khia báo là let và const)
let studentName = "Nguyễn Chí Thành";
console.log(studentName);

// Khai báo lại
// let studentName = "Nguyễn Chí Thành";

// Gán lại giá trị
studentName = "Lê Văn B"
console.log("studentName sau khi gán lại: ", studentName);

// Phạm vi (block){}

// Hoisting (có) TDZ
// console.log(studentName);
// let studentCode = "SV001";

// Từ khóa const
const PI = 3.14;

// Khai báo lại (không)

// Gán lại giá trị (không)

// phạm vi (block)

// Hoisting (có và tương tự như let)

// Các kiểu dực liệu cơ bản
// 1. Kiểu số
const fisrtNamber = 10;
const secondNumber = 20;

console.log("fisrtNumber=", fisrtNamber);
console.log("secondNumber=", secondNumber);
console.log("Kiểu dữ liệu của biến firstNumber:", typeof fisrtNamber);

console.log(fisrtNamber + " + " + secondNumber + " =", fisrtNamber + secondNumber);
console.log(fisrtNamber + " - " + secondNumber + " =", fisrtNamber - secondNumber);
console.log(fisrtNamber + " * " + secondNumber + " =", fisrtNamber * secondNumber);
console.log(fisrtNamber + " / " + secondNumber + " =", fisrtNamber / secondNumber);
console.log(fisrtNamber + " % " + secondNumber + " =", fisrtNamber % secondNumber);



// 2. Kiểu chuỗi
const email = "ntd@gmail.com";
const address = " Nguyễn Trãi,Hà Đông";

// 1. Thao tác nối chuỗi
console.log("Email = " + email + " - " + address);

// Template string (``)
console.log(Email = ${email}, Address = ${address});

// 3. Kiểu boolean (true/false)
console.log(false);

// 4. Kiểu underfined
let gender;
console.log("gender: ", gender);

// 5. Kiểu null: Khi khai báo 1 biến, nếu chúng ta " chưa muốn hoặc không xác định"
// trước được giá trị của biến đó thì mặc định có thể gán null
const user = null;

// 6.Kiểu NaN
console.log("Kiểu dữ liệu của NaN:", typeof NaN);
console.log("Result:", 10 / "abc");

// Chuyển đổi dữ liệu

const mathScore = 10;
const historyScore = "8";

//1. chuyển đổi 1 chuỗi thành số
console.log(parseInt(historyScore));
console.log(Number(historyScore));
console.log(+(historyScore));

//2. chuyển đổi 1 số sang 1 chuỗi
Dat
console.log(String(mathScore));
console.log(mathScore.toString());

//3. chuyển dổi boolean
console.log(Boolean(1));// true
console.log(Boolean(0));// false
console.log(Boolean(""));// false
console.log(Boolean(false));// false
console.log(Boolean(null));// false
console.log(Boolean(undefined));// false
console.log(Boolean(NaN));// false

// Cơ chế nhập xuất trong js
// 
// const myAge = +prompt("Nhập tuổi của bạn:");


// console.log();
// console.log();

// // Cơ chế xuất trong js
// alert(myName);
// alert(myAge);

//Cơ chế lựa chọn
confirm("Bạn có muốn đăng xuất!");
const isComfirm = ("Bạn có xác nhận đăng ký!");
console.log("isComfirm:", isComfirm);