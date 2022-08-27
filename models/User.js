"use strict";
//1.tạo class use để đại diện thông tin ng dùng
class User {
  constructor(
    firstName,
    lastName,
    username,
    password,

    pageSize = 10,
    category = "business"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;

    this.pageSize = pageSize;
    this.category = category;
  }
}

//7. tạo class để chứa các thông tin về task trong todo
class Task {
  constructor(task, owner, isDone) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}
