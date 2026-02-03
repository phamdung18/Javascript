let lateBook = [];
let count = parseInt(prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn?"));

for (let i=1;i<=count;i++){
    let name = prompt("Nhập tên cuốn sách bị trả muộn thứ " + i + ":");
    lateBook.push(name);
}
console.log("Tổng số sách bị trả muộn:", lateBook.length);
console.log("Danh sách sách bị trả muộn:");
for (let i = 0; i < lateBook.length; i++){
    console.log((i + 1) + " " + lateBook[i]);

}
let longNameCount = 0;
for (let i=0;i<lateBook.length;i++){
    if (lateBook[i].length >20){
        longNameCount++;
    }
}
console.log("Số lượng sách có tên dài hơn 20 ký tự:", longNameCount);
