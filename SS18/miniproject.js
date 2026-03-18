let products = JSON.parse(localStorage.getItem("products")) || [];
   let currentId = Number(localStorage.getItem("currentId")) || 1;
let editId = null;

   let form = document.getElementById("productForm");
let nameInput = document.getElementById("productName");
   let categoryInput = document.getElementById("productCategory");
   let priceInput = document.getElementById("productPrice");
let quantityInput = document.getElementById("productQuantity");
let descInput = document.getElementById("productDescription");
   
   let tableContainer = document.getElementById("table-container");
   let searchInput = document.getElementById("searchInput");
let filterCategory = document.getElementById("filterCategory");

let formTitle = document.getElementById("formTitle");
   let submitBtn = document.getElementById("submitBtn");
   let cancelBtn = document.getElementById("cancelBtn");
let totalProducts = document.getElementById("totalProducts");
   let totalValue = document.getElementById("totalValue");
let totalQuantity = document.getElementById("totalQuantity");
   let clearAllBtn = document.getElementById("clearAllBtn");

   function saveData() {   
  localStorage.setItem("products", JSON.stringify(products));
  localStorage.setItem("currentId", currentId);
}

function formatMoney(number) {   
  return number.toLocaleString("vi-VN") + " VNĐ";
}

function renderProducts(list = products) {
    if (list.length === 0) {
    tableContainer.innerHTML = `
          <div class="empty-state show">
        <div class="empty-state-icon">📦</div>
          <div class="empty-state-text">Chưa có sản phẩm</div>
        </div>
      `;
      updateStats();
      return;
  }

  let html = `
    <table>
  <thead>
    <tr>
  <th>ID</th>
    <th>Tên</th>
  <th>Danh mục</th>
    <th>Giá</th>
    <th>Số lượng</th>
  <th>Mô tả</th>
   <th>Hành động</th>
  </tr>
    </thead>
  <tbody>
    `;

  list.forEach((p) => {
      html += `
      <tr>
        <td>${p.id}</td>
      <td>${p.name}</td>
        <td>${p.category}</td>
      <td class="price">${formatMoney(p.price)}</td>
       <td class="quantity ${p.quantity < 10 ? "low-stock" : ""}">
      ${p.quantity}
        </td>
        <td class="description">${p.description || ""}</td>
      <td>
      <div class="action-buttons">
      <button class="btn-edit" onclick="editProduct(${p.id})">Sửa</button>
      <button class="btn-delete" onclick="deleteProduct(${p.id})">Xóa</button>
        </div>
        </td>
      </tr>
      `;
  });
  html += "</tbody></table>";

  tableContainer.innerHTML = html;
    updateStats();
}

function updateStats() {
    totalProducts.textContent = products.length;
  let value = 0;
    let quantity = 0;
    products.forEach((p) => {
    value += p.price * p.quantity;
      quantity += p.quantity;
  });
    totalValue.textContent = formatMoney(value);
  totalQuantity.textContent = quantity;
}

function resetForm() {
    form.reset();
  editId = null;
    formTitle.textContent = "Thêm Sản Phẩm Mới";
    submitBtn.textContent = "➕ Thêm Sản Phẩm";
  cancelBtn.style.display = "none";
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
    let name = nameInput.value.trim();
  let category = categoryInput.value;
    let price = Number(priceInput.value);
  let quantity = Number(quantityInput.value);
    let desc = descInput.value.trim();

  if (!name || !category || price < 0 || quantity < 0) {
    alert("Vui lòng nhập đúng thông tin!");
    return;
  }

  if (editId === null) {
    let product = {
      id: currentId++,
      name,
      category,
      price,
      quantity,
      description: desc,
    };
    products.push(product);
  } else {
    let p = products.find((p) => p.id === editId);
    p.name = name;
    p.category = category;
    p.price = price;
    p.quantity = quantity;
    p.description = desc;
  }
  saveData();
  resetForm();
  renderProducts();
});

function editProduct(id) {
  let p = products.find((p) => p.id === id);
  nameInput.value = p.name;
  categoryInput.value = p.category;
  priceInput.value = p.price;
  quantityInput.value = p.quantity;
  descInput.value = p.description;
  editId = id;
  formTitle.textContent = "Chỉnh Sửa Sản Phẩm";
  submitBtn.textContent = "Cập Nhật";
  cancelBtn.style.display = "inline-block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}
cancelBtn.onclick = resetForm;

function deleteProduct(id) {
    let p = products.find((p) => p.id === id);
  if (confirm("Bạn có chắc muốn xóa " + p.name + " ?")) {
      products = products.filter((p) => p.id !== id);
      if (editId === id) resetForm();
    saveData();
    renderProducts();
    }
}

clearAllBtn.onclick = function () {
  if (confirm("Xóa toàn bộ sản phẩm?")) {
      products = [];
      currentId = 1;
      localStorage.removeItem("products");
    localStorage.removeItem("currentId");
    resetForm();
    renderProducts();
  }
};
function filterProducts() {
    let keyword = searchInput.value.toLowerCase();
  let category = filterCategory.value;
    let result = products.filter((p) => {
      let matchName =
      p.name.toLowerCase().includes(keyword) ||
       p.description.toLowerCase().includes(keyword);
    let matchCategory = category === "" || p.category === category;
      return matchName && matchCategory;
  });
    renderProducts(result);
  }
searchInput.addEventListener("input", filterProducts);
  filterCategory.addEventListener("change", filterProducts);

renderProducts();

