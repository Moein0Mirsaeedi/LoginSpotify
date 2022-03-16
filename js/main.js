let users = {
  moein: {
    userName: "moein",
    password: "moein229",
  },
  reza: {
    userName: "reza",
    password: "reza228",
  },
};

let btn = document.querySelector("#btn");
let input1 = document.getElementById("text");
let input2 = document.getElementById("password");
let test = document.getElementById("test");

btn.onclick = function () {
  if (
    input1.value == users.moein.userName &&
    input2.value == users.moein.password
  ) {
    window.location.href = "index1.html";
  } else if (
    input1.value == users.reza.userName &&
    input2.value == users.reza.password
  ) {
    window.location.href = "index1.html";
  } else {
    window.alert("Eror");
  }
};
