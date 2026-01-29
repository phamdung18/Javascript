const nameBook = prompt("Nhập tên của sách: ");
const type = prompt("Nhập thể loại sách: ");
const statusBook = prompt("Nhập tình trạng của sách(có sẵn = 1 |đã mượn = 2): ");

if (type == "khoahoc" || type == "lichsu") {
    if (statusBook == 1) {
        console.log("Sách này có sẵn trong thư viện");
    } else {
        console.log("Sách đã được mượn");
    }
} else if (type == "vanhoc" || type == "truyen") {
    console.log("Sách này có thể đọc giải trí");
} else {

}