let employees = [];
let idCounter = 1;
const form = document.querySelector("form");
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const dobInput = document.getElementById("dateOfBirth");
const positionInput = document.getElementById("position");

const tableBody = document.querySelector("tbody");
const badge = document.querySelector(".badge");
const totalEmployee = document.querySelector(".footer span");
function showError(input, message) {
  let error = input.parentElement.querySelector(".error");

  if (!error) {
    error = document.createElement("span");
    error.className = "error";
    input.parentElement.appendChild(error);
  }

  error.textContent = message;
}
function clearError(input) {
  let error = input.parentElement.querySelector(".error");
  if (error) error.textContent = "";
}


function validateForm() {
  let isValid = true;

  const name = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const dob = dobInput.value;
  const position = positionInput.value;

  if (name === "") {
    showError(fullNameInput, "Họ và tên không được để trống");
    isValid = false;
  } else clearError(fullNameInput);

  if (email === "") {
    showError(emailInput, "Email không được để trống");
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError(emailInput, "Email không hợp lệ");
    isValid = false;
  } else clearError(emailInput);

  if (dob === "") {
    showError(dobInput, "Ngày sinh không được để trống");
    isValid = false;
  } else clearError(dobInput);

  if (position === "") {
    showError(positionInput, "Chức vụ không được để trống");
    isValid = false;
  } else clearError(positionInput);

  return isValid;
}

function formatDate(dateString) {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
function renderEmployees() {
  tableBody.innerHTML = "";

  employees.forEach((emp) => {
    const row = `
        <tr>
          <td>${emp.id}</td>
          <td>${emp.fullName}</td>
          <td>${emp.email}</td>
          <td>${formatDate(emp.dob)}</td>
          <td>${emp.position}</td>
          <td>
            <div class="actions">
              <button class="btn btn-sm btn-edit" onclick="editEmployee(${emp.id})">Sửa</button>
              <button class="btn btn-sm btn-delete" onclick="deleteEmployee(${emp.id})">Xóa</button>
            </div>
          </td>
        </tr>
    `;

    tableBody.innerHTML += row;
  });

  updateStats();
}


function updateStats() {
  badge.textContent = `${employees.length} nhân viên`;
  totalEmployee.textContent = `Tổng số nhân viên: ${employees.length}`;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!validateForm()) return;

  const employee = {
    id: idCounter++,
    fullName: fullNameInput.value.trim(),
    email: emailInput.value.trim(),
    dob: dobInput.value,
    position: positionInput.value,
  };

  employees.push(employee);

  renderEmployees();

  form.reset();
});
function deleteEmployee(id) {
  const emp = employees.find((e) => e.id === id);

  if (!confirm(`Bạn có chắc muốn xóa nhân viên ${emp.fullName}?`)) return;

  employees = employees.filter((e) => e.id !== id);

  renderEmployees();
}
function editEmployee(id) {
  const emp = employees.find((e) => e.id === id);

  fullNameInput.value = emp.fullName;
  emailInput.value = emp.email;
  dobInput.value = emp.dob;
  positionInput.value = emp.position;

  window.scrollTo({ top: 0, behavior: "smooth" });
}