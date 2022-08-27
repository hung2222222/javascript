"use strict";
const loginModal = document.getElementById("login-modal");
const mainContent = document.getElementById("main-content");
const welcomeMessage = document.getElementById("welcome-message");
const btnLogout = document.getElementById("btn-logout");

displayHome();
/**
 * 4.hiển thị nội dung trên trang home một cách hợp lý
 */
function displayHome() {
  // nếu ng dùng đăng nhập thì ẩn loginModal và hiện mainContent
  if (userActive) {
    loginModal.style.display = "none";
    mainContent.style.display = "block";
    // hiện thông  báo "Welcome + Firstname" và nút Logout.
    welcomeMessage.textContent = `Welcome ${userActive.firstName}`;
  } // nếu k có ai đăng nhập thì ẩn manContent và hiện loginModal
  else {
    loginModal.style.display = "block";
    mainContent.style.display = "none";
  }
}

/**
 * 5. bắt sự kiện khi ấn vào nút logout
 */
btnLogout.addEventListener("click", function () {
  const isLogout = confirm("bạn chắc chắn muốn logout ?");
  if (isLogout) {
    // gán giá trị userActive vef null để hiện không có ai đăng nhập
    userActive = null;
    saveToStorage("userActive", userActive);
    // hiển thị home ở dạng chưa đăng nhập
    displayHome();
  }
});
