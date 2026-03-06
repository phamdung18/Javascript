let tasks = [];
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const completedCount = document.getElementById("completedCount");
const totalCount = document.getElementById("totalCount");

function addTask() {
  let taskName = taskInput.value.trim();
  if (taskName === "") {
    alert("Không được để trống công việc!");
    return;
  }
  const newTask = {
    id: Date.now(),
    name: taskName,
    completed: false,
  };
  tasks.push(newTask);
  taskInput.value = "";
  taskInput.focus();
  renderTasks();
}


function renderTasks() {
  taskList.innerHTML = "";
  if (tasks.length === 0) {
    taskList.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📋</div>
        <div class="empty-state-text">
          Chưa có công việc nào. Hãy thêm công việc mới!
        </div>
      </div>
    `;
  } else {
    tasks.forEach((task) => {
      const taskItem = document.createElement("div");
      taskItem.className = "task-item";

      taskItem.innerHTML = `
        <input type="checkbox" class="task-checkbox" ${
          task.completed ? "checked" : ""
        }>

        <span class="task-text ${
          task.completed ? "completed" : ""
        }">${task.name}</span>

        <div class="task-actions">
          <button class="btn-edit">✏️ Sửa</button>
          <button class="btn-delete">🗑️ Xóa</button>
        </div>
      `;
      const checkbox = taskItem.querySelector(".task-checkbox");
      checkbox.addEventListener("change", () => toggleTask(task.id));
      const editBtn = taskItem.querySelector(".btn-edit");
      editBtn.addEventListener("click", () => editTask(task.id));
      const deleteBtn = taskItem.querySelector(".btn-delete");
      deleteBtn.addEventListener("click", () => deleteTask(task.id));
      taskList.appendChild(taskItem);
    });
  }
  updateFooter();
}

function toggleTask(id) {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
}

function editTask(id) {
  const task = tasks.find((t) => t.id === id);
  let newName = prompt("Sửa công việc:", task.name);
  if (newName === null) return;
  newName = newName.trim();
  if (newName === "") {
    alert("Tên công việc không được rỗng!");
    return;
  }
  task.name = newName;
  renderTasks();
}

function deleteTask(id) {
  if (confirm("Bạn có chắc muốn xóa công việc này?")) {
    tasks = tasks.filter((task) => task.id !== id);
    renderTasks();
  }
}
function updateFooter() {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;

  totalCount.textContent = total;
  completedCount.textContent = completed;
}

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
renderTasks();