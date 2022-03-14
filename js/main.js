let user1 = {
  userName: "moein",
  password: "moeing",
  email: "moein.mirsaeedi@gmail.com",
};

let user2 = {
  userName: "reza",
  password: "rezag",
  email: "reza.programmer@gmail.com",
};

let btn = document.querySelector("#btn");
let input1 = document.getElementById("text");
let input2 = document.getElementById("password");
let test = document.getElementById("test");

btn.onclick = function () {
  if (input1 == user1.userName && input2 == user1.password) {
    console.log("Hello");
  }
};
