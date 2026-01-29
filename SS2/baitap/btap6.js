let bookName = prompt("Nhập vào tên sách");
let fullName = prompt("Nhập vào tên người mượn");
let statusbar = prompt("Nhập vào tình trạng sách");
let day = prompt("Nhập vào số ngày mượn");
let coThe = prompt("Bạn có thẻ không");

console.log("Tên sách: ", bookName);
console.log("Tên người mượn: ", fullName);
console.log("Tình trạng sách: ", statusbar);
console.log("Số ngày mượn: ", day);

switch (statusbar) {
    case "có sẵn":
        if (coThe === "true") {
            console.log("Chúc mừng, bạn có thể mượn sách này");
        } else {
            console.log("Bạn không thể mượn sách này");
        }
        break;
    case "đã mượn":
        if (day < 30) {
            if (coThe === "true") {
                console.log("Sách đã được mượn, vui lòng đợi đến khi trả lại");
            } else {
                console.log("Bạn không thê mượn sách nếu không có thẻ");
            }
        }
        break;
    case "không có sẵn":
        console.log(
            "Sách này hiện không có sãn trong thư viện, bạn có thể đăng ký mượn sau",
        );
        break;
    default:
        console.log("Thông tin không hợp lệ, vui lòng nhập lại");
        break;
}