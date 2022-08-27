"use strict";

//hàm lấy dữ liệu
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

//hàm lưu dữ liệu xuống localStoage
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
// lấy dữ liệu từ localStorage
const users = getFromStorage("userArr") ? getFromStorage("userArr") : [];
// console.log(users);

// chuyển đổi về dạng class instance => trả về một mảng chứa các instance của class user
const userArr = users.map(user =>  (user));

//// lấy dữ liệu  user đang đăng nhập
let userActive = getFromStorage("userActive")
  ? parseUser(getFromStorage("userActive"))
  : null;

// console.log(userActive); 
/////////////////////
// hàm để chuyển từ JS Object sang Class Instance
function parseUser(userData) {
  const user = new User(
    userData.firstName,
    userData.lastName,
    userData.username,
    userData.password,
    userData.pageSize,
    userData.category
  );

  return user;
}

//7. lấy  giữ liệu todoArr từ localStorage
const todos = getFromStorage("todoArr") ? getFromStorage("todoArr") : [];
// chuyển đổi từ obj sang class instance
const todoArr = todos.map((todo) => parseTask(todo));

// hàm chuyển đổi từ obj sang class Instance của task class
function parseTask(taskData){
  const task = new Task(
    taskData.task, 
    taskData.owner, 
    taskData.isDone
    );
    return task;
  }
  

