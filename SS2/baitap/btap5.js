const nameBook = prompt("Nhập tên sách: ");
const statusBook = prompt("Nhập trạng thái sách(có sẵn = 1 hay đã mượn = 2): ");
const Publish = prompt("Nhập năm xuất bản: ");
const Year = new Date().getFullYear();

switch (statusBook) {

    case "1":
        if (Year - Publish <= 5) {
            console.log("Sách này mới và có sẵn để mượn");

        } else if (Year - Publish > 5) {
            console.log("Sách này có sẵn nhưng đã lâu năm");
        } else {
            console.log("Không hợp lệ!");

        }

        break;
    case "2":
        if (Year - Publish <= 10) {
            console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");

        } else if (Year - Publish > 10) {
            console.log("Sách này đã mượn và khá cũ");
        } else {
            console.log("Không hợp lệ!");
        }

        break;
    default:
        console.log("Không hợp lệ");

        break;
}