const nameBook = prompt("Nhập tên sách: ");
const namePeople = prompt("Nhập tên người mượn: ");
const loveLever = prompt("Nhập mức độ yêu thích: ");

if (loveLever == 4 || loveLever == 5) {
    console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");

} else if (loveLever == 2 || loveLever == 1) {
    console.log("Sách này bạn có thể cân nhắc mượn lại sau")
} else {
    ; console.log("Sách này khá ổn, có thể mượn");
}