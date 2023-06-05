import { setCookie } from "./set_cookie.js";
const form = document.getElementById("form");
const user_name = document.getElementById("user_name");
const user_password = document.getElementById("user_password");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let data = JSON.parse(this.responseText);
    if (data.state == "OK") {
      let text = setCookie("account_techstart_coffuel", data.cookie, 12);
      document.cookie = text;
      window.location.assign("/");
    } else {
      message.innerHTML = "Tài khoản hoặc mật khẩu không trùng khớp";
    }
  };
  xhttp.open("POST", "/compare_user");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(
    `user_name=${user_name.value}&user_password=${user_password.value}`
  );
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
