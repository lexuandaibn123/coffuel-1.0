const form = document.getElementById("form");
const sign_up = document.getElementById("sign_up");
const check = document.getElementById("check");
const user_name = document.getElementById("user_name");
const user_password = document.getElementById("user_password");
const user_password_again = document.getElementById("user_password_again");
const user_email = document.getElementById("user_email");
const user_tel = document.getElementById("user_tel");
const message = document.getElementById("message");
const message_password = document.getElementById("message_password");
const input = [...document.getElementsByClassName("input")];

sign_up.disabled = true;

check.addEventListener("click", () => {
  const xhttp = new XMLHttpRequest();
  const text = user_name.value;
  xhttp.onload = function () {
    if (this.responseText == "Hợp lệ") {
      message.style.color = "rgb(52, 255, 52)";
      message.style.color = "rgb(52, 255, 52)";
      if (user_password.value == user_password_again.value) {
        message_password.style.color = "rgb(52, 255, 52)";
        message_password.innerHTML = "Mật khẩu khớp";
        sign_up.disabled = false;
      } else {
        message_password.style.color = "rgb(243, 73, 73)";
        message_password.innerHTML = "Mật khẩu không trùng khớp";
      }
    } else {
      message.style.color = "rgb(243, 73, 73)";
    }
    message.innerHTML = this.responseText;
  };
  xhttp.open("POST", "/admin/check_username");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(`user_name=${text}`);
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const xhttp = new XMLHttpRequest();
  const name = user_name.value;
  const password = user_password.value;
  const email = user_email.value;
  const tel = user_tel.value;
  xhttp.onload = function () {
    console.log("Create Account");
    window.location.assign("/");
  };
  xhttp.open("POST", "/create_user");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(
    `user_name=${name}&user_password=${password}&user_email=${email}&user_tel=${tel}`
  );
});

input.forEach((element) => {
  element.addEventListener("keydown", () => {
    sign_up.disabled = true;
  });
});
