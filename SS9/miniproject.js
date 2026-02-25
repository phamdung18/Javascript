let names = ["iPhone 14", "Samsung A54", "Oppo Find X", "Xiaomi 12", "Vivo Y22"];
let prices = [1000, 450, 800, 600, 300];
let stocks = [5, 0, 7, 10, 2];
let running = true;

while (running){
  let choice = prompt(
`===== HỆ THỐNG QUẢN LÝ =====
1. Lọc sản phẩm giá > 700
2. Kiểm tra tồn kho
3. Tính tổng giá trị kho
4. Giảm giá 10%
5. Tìm sản phẩm
6. Xem báo cáo kho
7. Thoát
Chọn (1-7):`);
  if (choice === null) break;
  switch (Number(choice)){
    case 1:
      let highProducts = names.filter(function(name, index){
        return prices[index] > 700;
      });
      if (highProducts.length === 0){
        alert("Không có sản phẩm nào giá cao.");
      } else{
        alert("Sản phẩm giá cao:\n" + highProducts.join("\n"));
      }
      break;
    case 2:
      let outOfStock = stocks.some(function(qty){
        return qty === 0;
      });

      let allAbove300 = prices.every(function(price){
        return price > 300;
      });

      alert(`Kết quả:
- Có sản phẩm hết hàng: ${outOfStock ? "Có" : "Không"}
- Tất cả giá > 300: ${allAbove300 ? "Đúng" : "Sai"}`
      );
      break;
    case 3:
      let total = prices.reduce(function(sum, price, index){
        return sum + price * stocks[index];
      }, 0);
      alert("Tổng giá trị kho: " + total + " USD");
      break;
    case 4:
      prices = prices.map(function(price){
        return price * 0.9;
      });
      alert("Đã giảm 10% cho tất cả sản phẩm.");
      break;
    case 5:
      let keyword = prompt("Nhập tên cần tìm:");
      if (!keyword) break;
      keyword = keyword.toLowerCase();
      let found = names.filter(function(name){
        return name.toLowerCase().includes(keyword);
      });
      if (found.length === 0){
        alert("Không tìm thấy.");
      } else {
        alert("Kết quả:\n" + found.join("\n"));
      }
      break;
    case 6:
      let report = names.map(function(name, index){
        if (stocks[index] > 0) {
          return name + " - Còn hàng (" + stocks[index] + ")";
        } else {
          return name + " - Hết hàng";
        }
      });
      alert("Báo cáo kho:\n" + report.join("\n"));
      break;
    case 7:
      running = false;
      alert("Đã thoát.");
      break;
    default:
      alert("Nhập sai!");
  }
}