const numberOfBook = prompt("Nhập số lượng sách: ");

if (numberOfBook < 10) {
    console.log("Thư viện có ít sách");

} else if (numberOfBook >= 10 && numberOfBook < 20) {
    console.log("Thư viện có số lượng sách vừa đủ");

} else {
    console.log("Thư viện có nhiều sách");
}