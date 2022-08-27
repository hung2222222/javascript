"use strict";

// 2. Chức năng Register
const inputFirstname = document.getElementById("input-firstname");
const inputLastname = document.getElementById("input-lastname");
const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputPasswordConfirm = document.getElementById("input-password-confirm");
const btnSubmit = document.getElementById("btn-submit");

// taọ sự kiện click vào nút Register
btnSubmit.addEventListener("click", function () {
  //lấy dữ liệu ng dùng  nhập vào form
  const user = new User(
    inputFirstname.value,
    inputLastname.value,
    inputUsername.value,
    inputPassword.value
  );

  const isValidate = Validate(user);
  if (isValidate) {
    // thêm user vào mảng userArr
    userArr.push(user);
    // lưu dữ liệu lại
    saveToStorage("userArr", userArr);

    alert("đăng ký thành công");

    // chuyển hướng sang login
    window.location.href = "../pages/login.html";
  }
});

// kiểm tra dữ liệu hợp lệ
function Validate(user) {
  let isValidate = true;

  // không có trường hơp nào bỏ trống
  if(user === "") {
    alert("bạn cần điền thông tin !");
  }
  if (user.firstName.length === 0) {
    alert("vui lòng nhập firsname");
    isValidate = false;
  }
  if (user.lastName.length === 0) {
    alert("vui lòng nhập lastname");
    isValidate = false;
  }
  if (user.username.length === 0) {
    alert("vui lòng nhập username");
    isValidate = false;
  }

  // mật khẩu phải có nhiều hơn 8 ký tự nên 
  if (user.password === "") {
    alert("vui lòng nhập password");
    isValidate = false;
  }

  if (inputPasswordConfirm.value === "") {
    alert("vui lòng nhập confirm password");
    isValidate = false;
  }

  // usename không dc trùng vs usename khác
  for (let i = 0; i < userArr.length; i++) {
    if (user.username === userArr[i].username) {
      alert("Username đã tồn tại !");
      isValidate = false;
      break;
    }
  }
  // password và confirm password phải giống nhau
  if (user.password !== inputPasswordConfirm.value) {
    alert("password và confirm password phải giống nhau");
    isValidate = false;
  }

  //password phải nhiều hơn 8 kí tự
  if (user.password.length <= 8) {
    alert("password phải có nhiều hơn 8 ký tự");
    isValidate = false;
  }
  return isValidate;
}
