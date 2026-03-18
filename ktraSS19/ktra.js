let contact = [];
  let id = 1;

  const form = document.getElementById("contact-form");
 const nameInput = document.getElementById("contact-name");
  const phoneInput = document.getElementById("contact-phone");
const emailInput = document.getElementById("contact-email");
const tbody = document.getElementById("contact-tbody");
  const btnSubmit = document.querySelector(".btn-add");


function renderContacts() {
    let str = "";
      for (let i = 0; i < contact.length; i++) {
        str += `
          <tr>
            <td>${contact[i].id}</td>
              <td>${contact[i].name}</td>
            <td>${contact[i].phone}</td>
              <td>${contact[i].email}</td>
            <td>
                  <button onclick="editContact(${i})">Sửa</button>
                <button onclick="deleteContact(${i})">Xóa</button>
            </td>
         </tr>
        `;
      }
    tbody.innerHTML = str;
}

function validationInput(name, phone, email) {
    if (name === "") {
          alert("Tên không được để trống")
        return false;
      }
    if (name.length < 3) {
        alert("Tên sản phẩm phải có ít nhất 3 ký tự!");
          return false;
    }
    if (phone === "") {
        alert("SĐT không được để trống!");
          return false;
    }
       if (email === "") {
        alert("Email không được để trống!");
          return false;
    }
}
form.addEventListener("submit" , function(e){
      e.preventDefault();
    let name = nameInput.value.trim();
      let phone = phoneInput.value.trim();
    let email = emailInput.value.trim();
    if (!validationInput){
          return ; 
    }
      let newContact = {
        name , 
          phone , 
          email ,
    };
      if (editIndex === -1) {

      contact.push(newContact);
    alert("Thêm liên hệ thành công!");
    } else {

      contact[editIndex] = newContact;
      alert("Cập nhật liên hệ thành công!");
      editIndex = -1;
    btnSubmit.textContent = "Thêm";
    }
    form.resert();
    renderContacts();
});
console.log(contact);