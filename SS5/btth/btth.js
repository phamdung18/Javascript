let choice;
let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];

do {choice = +prompt(`
--- THƯ VIỆN KHOA HỌC ---
1. Xem danh sách
2. Nhập sách mới
3. Mượn sách (Xóa)
4. Sửa tên sách
5. Sắp xếp kệ
0. Thoát
`);
    switch (choice) {
        case 1:
            console.log("Số lượng sách trong kho: ", books.length);
            console.log("Danh sách các quyển sách trong kho: ");
            for (let i = 0; i < books.length; i++) {
                console.log(`${i + 1}.${books[i]} `);
            }

            break;
        case 2:
            const bookNameAdd = prompt("Nhập tên sách cần thêm: ");
            books.push(bookNameAdd);

            alert("Thêm sách thành công")

            break;
        case 3:
            const bookBorrow = prompt("Nhập tên cuốn sách cần mượn: ");
            const searchIndex = books.indexOf(bookBorrow);
            if (searchIndex !== -1) {
                alert(`Đã mượn cuốn sách ${bookBorrow}`);
                books.splice(searchIndex, 1);
            } else {
                alert("Không có sách này trong kho")
            }
            break;
        case 4:
            const bookNameOld = prompt("Vui lòng nhập tên sách cần cập nhật: ");
            const searchbooknameOld = books.indexOf(bookNameOld);
            if (searchbooknameOld !== -1) {
                const bookNameNew = prompt("Vui lòng nhập tên sách mới: ");
                books[searchbooknameOld] = bookNameNew;
                alert("Cập nhật sách thành công");
            } else {
            }
            break;
        case 5:
            books.sort;
            console.log("Danh sách các quyển sách sau khi sắp xếp: ");
            for (let i = 0; i < books.length; i++) {
                console.log(`${i + 1}.${books[i]} `);
            }
            break;
        case 0:
            alert("Thoát chương trình!");
            break;

        default:
            alert("Lựa chọn không hợp lệ. Vui lòng nhập lại")
            break;
    }
} while (choice !== 0);
