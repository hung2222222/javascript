"use strict";

const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const btnSubmit = document.getElementById("btn-submit");
// const data = getFromStorage("userArr");
// console.log(data);
//bắt sự kiện nút login
btnSubmit.addEventListener("click", function () {
  // kiểm tra xem ng dùng đã nhập đủ username và password chưa
  const isValidate = Validate();
  if (isValidate) {
    // tìm kiếm thông tin user người dùng có đúng hay không
    const user = userArr.find(
      item =>
        item.username === inputUsername.value &&
        item.password === inputPassword.value
    );

    // console.log(user);
    if (user) {
      alert("đăng nhập thành công");
      //lưu thông tin  user hiện tại lên trang đăng nhập
      saveToStorage("userActive", user);
      // chuyển hướng về trang chủ
      window.location.href = "../index.html";
    } else {
      alert("thông tin đăng nhập không đúng vui lòng kiểm tra lại!");
    }
  }
});

// hàm dữ liệu nhập vào của người dùng
function Validate() {
  let isValidate = true;
  if (inputUsername.value === "") {
    alert("bạn chưa nhập Username!");
    isValidate = false;
  }
  if (inputPassword.value === "") {
    alert("bạn chưa nhập Password!");
    isValidate = false;
  }

  return isValidate;
}
