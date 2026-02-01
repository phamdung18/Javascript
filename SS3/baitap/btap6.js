let total = 0;
let seriousCount = 0;  
let mediumCount = 0;   
let lightCount = 0;     
let suggestionCount = 0; 
let positiveCount = 0;   

while (true) {
    let choice = prompt("Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)");
    if (choice === "không") {
        break;
    }
    if (choice !== "có") {
        alert("Vui lòng nhập 'có' hoặc 'không'");
        continue;
    }
    let name = prompt("Tên bạn đọc:");
    if (name === "") {
        alert("Tên bạn đọc không được để trống");
        continue;
    }
    let cardId = prompt("Mã thẻ bạn đọc (có thể để trống):");
    let type = +prompt("Loại phản hồi:\n1 - Khiếu nại\n2 - Đề xuất cải thiện\n3 - Phản hồi tích cực");
    total++;
    if (type === 1) {
        let level = +prompt(
            "Mức độ nghiêm trọng:\n1 - Nhẹ\n2 - Trung bình\n3 - Nghiêm trọng"
        );
        if (level === 3) {
            console.log("→ Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
            seriousCount++;
        } else if (level === 2) {
            console.log("→ Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
            mediumCount++;
        } else if (level === 1) {
            console.log("→ Xử lý ngay tại quầy - Khiếu nại nhẹ");
            lightCount++;
        } else {
            alert("Mức độ không hợp lệ");
            total--;
        }
    } else if (type === 2) {
        console.log("→ Cảm ơn! Đề xuất đã được ghi nhận");
        suggestionCount++;
    } else {
        alert("Loại phản hồi không hợp lệ");
        total--;
    }
}
console.log("Tổng số phản hồi/khiếu nại:", total);
console.log("Khiếu nại nghiêm trọng:", seriousCount);
console.log("Khiếu nại trung bình:", mediumCount);
console.log("Khiếu nại nhẹ:", lightCount);
console.log("Đề xuất cải thiện:", suggestionCount);
console.log("Phản hồi tích cực:", positiveCount);
