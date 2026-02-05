let count = 0;
let login = false;

while (count < 3){
  let user = prompt("Tên đăng nhập:");
  let pass = prompt("Mật khẩu:");

  if (user === "admin" && pass === "12345"){
    alert("Đăng nhập thành công");
    login = true;
    break;
  } else{
    count++;
    alert("Sai! Còn " + (3 - count) + " lần");
  }
}

if (!login){
  alert("Tài khoản đã bị khóa");
} else{
  let book = ["Toán", "Văn", "Anh"];
  let run = true;
    while (run){
    let choice = prompt(`1. Nhập thêm sách
                         2. Hiển thị sách
                         3. Tìm sách
                         4. Sửa tên sách
                         5. Đảo ngược kệ
                         6. Gộp kho
                         7. Thoát`);

    switch (choice){
    case "1":{
        let input = prompt("Nhập sách (cách nhau bằng dấu phẩy):");
        let arr = input.split(",");

        for (let book of arr){
          book.push(book.trim());
        }

        alert("Đã thêm sách");
        break;
    }

    case "2":{
        console.clear();
        for (let i = 0; i < book.length; i++){
          console.log((i + 1) + ". " + book[i]);
        }
        break;
    }

    case "3":{
        let name = prompt("Tên sách cần tìm:");
        let index = book.indexOf(name);

        if (index !== -1){
          alert("Tìm thấy tại vị trí " + index);
        } else{
          alert("Không tìm thấy");
        }
        break;
    }

    case "4":{
        let oldName = prompt("Tên sách cũ:");
        let newName = prompt("Tên sách mới:");
        let index = book.indexOf(oldName);

        if (index !== -1){
          book[index] = newName;
          alert("Đã cập nhật");
        } else{
          alert("Sách không tồn tại");
        }
        break;
    }

    case "5":{
        book.reverse();
        console.clear();
        for (let i in book){
          console.log(i + ": " + book[i]);
        }
        break;
    }

    case "6":{
        let other = ["Sử", "Địa"];
        book = book.concat(other);
        alert("Đã gộp kho");
        break;
    }

    case "7":
        alert("Hẹn gặp lại");
        run = false;
        break;

    default:
        alert("Chọn sai");
    }
  }
}
