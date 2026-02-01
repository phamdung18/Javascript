let totalRequest = 0;
let successRequest = 0;
let rejectRequest = 0;
let pendingRequest = 0;
let readerName;
let bookCode;
let bookName;
let waitDays;
let priority;

while (true) {
    let choice = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)");
    if (choice === "không") {
        break;
    }
    if (choice !== "có") {
        alert("Vui lòng nhập 'có' hoặc 'không'");
        continue;
    }
    readerName = prompt("Tên bạn đọc:");
    bookCode = prompt("Mã sách muốn đặt trước:");
    bookName = prompt("Tên sách:");
    waitDays = +prompt("Số ngày dự kiến chờ (>=1):");
    priority = +prompt("Ưu tiên:\n1 - Sinh viên bình thường\n2 - Giảng viên/Nghiên cứu sinh \n3 - Nhân viên thư viện / Đặc cách");
    totalRequest++;
    if (waitDays > 45) {
        console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
        rejectRequest++;
    } else if (priority === 3) {
        console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
        successRequest++;
    } else if (priority === 2 && waitDays <= 30) {
        console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
        successRequest++;
    } else if (priority === 1 && waitDays <= 21) {
        console.log("Đặt trước thành công");
        successRequest++;
    } else {
        console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
        pendingRequest++;
    }
}
console.log("Tổng số yêu cầu đã xử lý:", totalRequest);
console.log("Số yêu cầu đặt trước thành công:", successRequest);
console.log("Số yêu cầu bị từ chối:", rejectRequest);
console.log("Số yêu cầu chờ xét duyệt:", pendingRequest);