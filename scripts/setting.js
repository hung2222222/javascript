"use strict";
const inputPageSize = document.getElementById("input-page-size");
const inputCategory = document.querySelector("#input-category");
const btnSubmit = document.getElementById("btn-submit");

// tạo sự kiện nút submit
btnSubmit.addEventListener("click", function () {
  if (validate()) {
    //  cập nhật lại userActive
    userActive.pageSize = Number.parseInt(inputPageSize.value);
    userActive.category = inputCategory.value;
    saveToStorage("userActive", userActive);

    // / cập nhập lại mảng  userArr
    const index = userArr.findIndex(
      userItem => userItem.username === userActive.username
    );
    userArr[index] = userActive;
    saveToStorage("userArr", userArr);

    //reset lại trang đăng nhập và thông báo thành công
    alert("cài đặt thành công");
    inputPageSize.value = "";
    inputCategory.value = "General";
  }
});
// hàm validate dữ liệu nhập vào của ng dung
function validate() {
  let isValidate = true;

  // kiểm tra inputPageSize
  if (Number.isNaN(Number.parseInt(inputPageSize.value))) {
    alert("new per page không hợp lệ !");
    isValidate = false;
  }
  // kiểm tra inputCategory
  if (inputCategory.value === "General") {
    alert("bạn chưa chọn News Category");
    isValidate = false;
  }
  return isValidate;
}
