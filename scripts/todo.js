"use strict";
// nếu đã đăng nhâp
const todoList = document.getElementById("todo-list");
const btnAdd = document.getElementById("btn-add");
const inputTask = document.getElementById("input-task");

dislayTodoList();
// hàm hiển thị thông tin todo list
function dislayTodoList() {
  let html = "";

  //mảng tododArr lọc ra các todo là của user đang đăng nhập
  todoArr
    .filter(todo => todo.owner === userActive.username)
    //forEach lấy giá trị của một ptu trong mảng theo thứ tự
    .forEach(function (todo) {
      html += `<li class=${todo.isdons ? "checked" : ""} >${
        todo.task
      }<span class="close">x</span></li>`;
    });
  // console.log(dislayTodoList);
  todoList.innerHTML = html;

  // bắt sự kiện
  eventToggleTasks();
  eventDeleteTasks();
}

// bắt sự kiện thêm nút add để thêm task
btnAdd.addEventListener("click", function () {
  // kiểm tra người dùng đã nhập tên nhiệm vụ  cần Add chưa
  if (inputTask.value.length === 0) {
    alert("bạn chưa nhập nhiệm vụ !");
  } else {
    const todo = new Task(inputTask.value, userActive.username, false);

    // thêm task mới vào mảng todoArr
    todoArr.push(todo);
    //lưu dữ liệu xuống local
    saveToStorage("todoArr", todoArr);
    // hiển thị list các nhiệm vụ
    dislayTodoList();
    // reset dữ liệu đăng nhập từ form
    inputTask.value = "";
  }
});

// bắt sự kiện toggle tasks
function eventToggleTasks() {
  //lấy tất cả các ptu li chứa thông tin của các task và bắt sự  kiện click trên từng li này
  document.querySelectorAll("#todo-list li").forEach(function (liEl) {
    liEl.addEventListener("click", function (e) {
      //tránh nút delete để k bị trồng sự kiện khi ấn nút
      if (e.target !== liEl.children[0]) {
        // toggle class checked
        liEl.classList.toggle("checked");
        // tìm task vừa click vào  toggle
        const todo = todoArr.find(
          todoItem =>
            todoItem.owner === userActive.username &&
            todoItem.task === liEl.textContent.slice(0, -1)
        );
        // sau đó thay đổi thuộc tính isDone của nó
        todo.isDone = liEl.classList.contains("checked") ? true : false;
        //cập nhập lại local
        saveToStorage("tooArr", todoArr);
      }
    });
  });
}
// hàm bắt sự kiện  nút xoá các task
function eventDeleteTasks() {
  // lấy tất cả các ptu nút delete bắt sự kiện click trên từng pt ấy
  document.querySelectorAll("#todo-list .close").forEach(function (closeEl) {
    closeEl.addEventListener("click", function () {
      //xác nhận xoá
      const isDelete = confirm("bạn chắc chắn muốn xoá ?");

      if (isDelete) {
        // tìm vị trí của task dc ấn xoá trong bảng
        const index = todoArr.findIndex(
          item =>
            // xác định tên  user và tên task
            item.owner === userActive.username &&
            item.task === closeEl.parentElement.textContent.slice(0, -1)
        );
        console.log(index);
        // xoá task đó ra khỏi mảng todoArr
        todoArr.splice(index, 1);
        // lưu dữ liệu xuống local
        saveToStorage("todoArr", todoArr);
        // hiển thị lại list todo
        dislayTodoList();
      }
    });
  });
}
