let bookId = [];
let nameBook = [];
let booksCategory = [];
let inventoryQuantity = [];

let n = parseInt(prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?"));

for (let i=0;i<n;i++){
    let id;
    while (true){
        id = prompt("Nhập mã sách thứ " + (i+1) + ":");
        let trung = false;
        for (let j=0;j<bookId.length;j++){
            if (bookId[j] === id){
                trung = true;
                break;
            }
        }
        if (!trung) break;
        alert("Mã sách bị trùng, nhập lại!");
    }
    let name = prompt("Nhập tên sách thứ " + (i+1) + ":");
    let category = prompt("Nhập các thể loại (cách nhau bởi dấu phẩy):");
    let quantity = parseInt(prompt("Nhập số lượng tồn kho:"));
    bookId.push(id);
    nameBook.push(name);
    booksCategory.push(category);
    inventoryQuantity.push(quantity);
}
let countLapTrinh = 0;
for (let i=0;i<booksCategory.length;i++) {
    if (booksCategory[i].toLowerCase().includes("lập trình")){
        countLapTrinh++;
    }
}
console.log("Tổng số sách thuộc thể loại 'Lập trình':", countLapTrinh);
console.log("Danh sách mã sách thuộc cả hai thể loại 'JavaScript' và 'Web':");
for (let i=0;i<booksCategory.length;i++){
    let cat = booksCategory[i].toLowerCase();
    if (cat.includes("javascript") && cat.includes("web")){
        console.log(bookId[i]);
    }
}
let minIndex = 0;
for (let i=1;i<inventoryQuantity.length;i++){
    if (inventoryQuantity[i] < inventoryQuantity[minIndex]){
        minIndex = i;
    }
}
console.log("Loại sách có số lượng tồn kho thấp nhất:");
console.log("Mã sách: " + bookId[minIndex]+ 
            ", Tên sách: " + nameBook[minIndex]+
            ", Tồn kho: " + inventoryQuantity[minIndex]
);
