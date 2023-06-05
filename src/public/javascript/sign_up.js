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
      message.innerHTML = "<img src='/images/icon_tick.png' width='20vw'/>";
      if (user_password.value == user_password_again.value) {
        message_password.style.color = "rgb(52, 255, 52)";
        message_password.innerHTML =
          "<img src='/images/icon_tick.png' width='20vw'/>";

        sign_up.disabled = false;
      } else
        message_password.innerHTML =
          "<img src='/images/icon_warning.png' width='20vw'/>";
    } else
      message.innerHTML = "<img src='/images/icon_warning.png' width='20vw'/>";
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

// xử lý phần gửi email

const send_email = document.getElementById("send_email");
const email_received = document.getElementById("email_received");

const is_email = (to_email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(to_email); // test xem có phù hợp với biểu thức chính quy không
};

send_email.addEventListener("click", () => {
  let to_email = email_received.value;
  let bool = is_email(to_email);
  if (bool == true) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      alert(
        `Gửi mail thành công tới ${to_email}. Vui lòng kiểm tra mail của bạn`
      );
      email_received.value = "";
    };
    xhttp.open("GET", `/send_email_user?email=${to_email}`);
    xhttp.send();
  } else alert("Email không hợp lệ");
});
