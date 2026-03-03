let players = [
    {ID: 1, Ten: "Haaland", Vitri: "Tiền đạo", Tuoi: 25, Giatrichuyennhuong: "200 triệu $", Chantrai: 4/5},
    {ID: 2, Ten: "Mbappe", Vitri: "Tiền đạo", Tuoi: 26, Giatrichuyennhuong: "500 triệu $", Chantrai: 5/5},
    {ID: 3, Ten: "Yamal", Vitri: "Tiền đạo", Tuoi: 19, Giatrichuyennhuong: "300 triệu $", Chantrai: 4/5},
    {ID: 4, Ten: "roudiger", Vitri: "Hậu vệ", Tuoi: 30, Giatrichuyennhuong: "150 Triệu $", Chantrai: 3/5},
    {ID: 5, Ten: "courtois", Vitri: "Thủ môn", Tuoi: 31, Giatrichuyennhuong: "120 triệu $", Chantrai: 4/5}
];
const validClasses = ['Thủ môn', 'Hậu vệ', 'Tiền vệ', 'Tiền đạo'];

let choice;
do {
    do{
        choice = prompt(
            "QUẢN LÝ ĐỘI HÌNH CẦU THỦ NGOẠI HẠNG ANH\n"+
            "---------------------------------------\n"+
            "1. Xem toàn bộ danh sách cầu thủ\n"+
            "2. Thêm cầu thủ mới\n"+
            "3. Xóa cầu thủ\n"+
            "4. Cập nhật thông tin cầu thủ\n"+
            "5. Tìm kiếm cầu thủ\n"+
            "6. Lọc cầu thủ theo vị trí + tổng giá trị chuyển nhượng vị trí\n"+
            "7. Sắp xếp danh sách cầu thủ\n"+
            "8. Thống kê đội bóng\n"+
            "0. Thoát chương trình\n"+
            "---------------------------------------\n"+
            "Chọn:"
        ); 
    } while (!["0","1","2","3","4","5","6","7"].includes(choice));
        switch (choice) {
            case 1:{
                let output = "=== DANH SÁCH CẦU THỦ ===\n\n";
                players.forEach(w => {
                output += `${w.ID} | ${w.Ten} | ${w.Vitri} | ${w.Tuoi} | ${w.Giatrichuyennhuong} | ${Chantrai}\n`;
                });
                alert(output);
                break;
            }
            case 2: {
                let id;
                do {
                    id = prompt("ID: ");
                } while (!id || players.some(w => w.id === id));

                let Ten;
                do {
                    Ten = prompt("Ten: ");
                } while (!Ten || players.some(w => w.Ten.toLowerCase() === Ten.toLowerCase()));

                let vitri;
                do {
                 vitri = prompt("Vitri: ");
                } while (!validClasses.includes(vitri));

                let attack;
                do {
                    attack = Number(prompt("Tuoi: "));
                } while (isNaN(attack) || attack < 1 || attack > 100);

                let defense;
                do {
                    defense = Number(prompt("Giatrichuyennhuong: "));
                } while (isNaN(defense) || defense < 0);

                warriors.push({ id, name, class: warriorClass, attack, defense });

                alert("Thêm thành công!");
                break;
            }
            case 3:{ 
                let name;
                let index;

                do {
                    name = prompt("Nhập tên cần xóa: ");
                    index = players.findIndex(w => w.Ten.toLowerCase() === name.toLowerCase()
                    );
                } while (index === -1);

                let confirmDelete;
                do {
                    confirmDelete = prompt("Xác nhận xóa? (yes/no): ");
                } while (!["yes","no"].includes(confirmDelete.toLowerCase()));

                if (confirmDelete.toLowerCase() === "yes") {
                    players.splice(index, 1);
                    alert("Đã xóa!");
                } else {
                    alert("Hủy thao tác.");
                }
                break;
            }
            case 6:{
                break;
            }
            case 8:{
                break;
            }
            case 0:
      alert("Thoát chương trình.");
      break;
            default:
                break;
        }
}  while (choice !== "0");