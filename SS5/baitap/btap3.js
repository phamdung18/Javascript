let bookId = [];
let nameBook = [];
let inventoryQuantity = [];

let n = parseInt(prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?"));

for (let i=0;i<n;i++){
    let id = prompt("Nhập mã sách:");
    let name = prompt("Nhập tên sách:");
    let quantity = parseInt(prompt("Nhập số lượng tồn kho:"));

    bookId.push(id);
    nameBook.push(name);
    inventoryQuantity.push(quantity);
}

console.log("Danh sách sách cần xem xét bổ sung ("+bookId.length +"loại):");
for (let i=0;i<bookId.length;i++){
    console.log((i + 1)+
        ". Mã: " + bookId[i]+
        " - Tên: " + nameBook[i]+
        " - Còn: " + inventoryQuantity[i]+ "bản"
    );
}
let countLow = 0;
for (let i=0;i<inventoryQuantity.length;i++){
    if (inventoryQuantity[i]<=5){
        countLow++;
    }
}

console.log("Số sách có tồn kho ≤ 5 bản:", countLow);
let outOfStock = "";
for (let i=0;i<inventoryQuantity.length;i++){
    if (inventoryQuantity[i]===0){
        outOfStock +=bookId[i] + "";
    }
}
console.log("Các mã sách đã hết hàng (0 bản):", outOfStock);
