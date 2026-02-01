let totalBooks = 0;
let lostBooks = 0;
let outOfStockBooks = 0;

while (true) {
    let choice = prompt("Tiếp tục kiểm kê sách? (có/không)");
    if (choice === "không") {
        break;
    }
    if (choice !== "có") {
        alert("Chỉ được nhập 'có' hoặc 'không'");
        continue;
    }
    let bookId = prompt("Nhập mã sách:");
    if (bookId === "") {
        alert("Mã sách không được để trống");
        continue;
    }
    let quantity = +prompt("Số lượng sách trong kho:");
    if (quantity < 0) {
        alert("Số lượng phải >= 0");
        continue;
    }
    let status = +prompt("Tình trạng sách (1: Bình thường, 2: Mất)");
    totalBooks++;
    if (status === 2) {
        console.log("Sách mất");
        lostBooks++;
    } else if (quantity === 0) {
        console.log("Sách hết hàng");
        outOfStockBooks++;
    } else {
        console.log("Sách còn trong kho");
    }
}
console.log("Tổng số sách đã kiểm kê:", totalBooks);
console.log("Số sách mất:", lostBooks);
console.log("Số sách hết hàng:", outOfStockBooks);
