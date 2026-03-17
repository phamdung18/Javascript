let products = [
   {code: "SP001", name: "Laptop Dell XPS 15", price: 2500000},
  {code: "SP002", name: "iPhone 15 Pro Max", price: 3290000},
   {code: "SP003", name: "Samsung Galaxy S24 Ultra", price: 2890000},
    {code: "SP004", name: "Tai nghe AirPods Pro 2", price: 599000},
  {code: "SP005", name: "Bàn phím cơ Logitech MX Keys", price: 299000},
   {code: "SP006", name: "Chuột Logitech MX Master 3", price: 249000},
   {code: "SP007", name: "Màn hình Dell UltraSharp", price: 1290000},
   {code: "SP008", name: "MacBook Pro M3", price: 4590000},
  {code: "SP009", name: "iPad Pro M2", price: 2890000},
   {code: "SP010", name: "Loa JBL Flip 6", price: 399000}
];

    let form = document.getElementById("product-form");
let tbody = document.getElementById("product-tbody");
    let codeInput = document.getElementById("product-code");
let nameInput = document.getElementById("product-name");
let priceInput = document.getElementById("product-price");
let editIndex = -1;

function showProducts() {
    tbody.innerHTML = "";
  for (let i=0;i<products.length;i++) {
    let p = products[i];
     let row = `
      <tr>
        <td>${i+1}</td>
           <td>${p.code}</td>
        <td>${p.name}</td>
            <td>${p.price.toLocaleString("vi-VN")}</td>
        <td>
          <button onclick="editProduct(${i})">Sửa</button>
          <button onclick="deleteProduct(${i})">Xóa</button>
           </td>
      </tr>
    `;
    tbody.innerHTML += row;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let code = codeInput.value;
  let name = nameInput.value;
  let price = priceInput.value;

  if (code === "") {
    alert("Mã sản phẩm không được để trống!");
    return;
  }
  for (let i=0;i<products.length;i++) {
    if (products[i].code === code && editIndex === -1) {
      alert("Mã sản phẩm đã tồn tại!");
      return;
    }
  }

  if (name === "") {
    alert("Tên sản phẩm không được để trống!");
    return;
  }
  if (name.length <3) {
    alert("Tên sản phẩm phải có ít nhất 3 ký tự!");
    return;
  }
  if (price === "" || price <1000) {
    alert("Giá sản phẩm phải tối thiểu 1000!");
    return;
  }
  let product = {
        code: code,
    name: name,
    price: Number(price)
     };
  if (editIndex === -1) {
    products.push(product);
    alert("Thêm sản phẩm thành công!");
     } else {
    products[editIndex] = product;
    editIndex = -1;
        alert("Sửa thành công!");
  }
  form.reset();
      showProducts();
});
function deleteProduct(index) {
      if (confirm("Bạn có chắc muốn xóa?")) {
    products.splice(index, 1);
        showProducts();
  }
}
function editProduct(index) {
     let p = products[index];
     codeInput.value = p.code;
  nameInput.value = p.name;
        editIndex = index;
}
showProducts();