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

// xử lý đa ngôn ngữ
document.cookie = "language=vi";
let languageStrings = {};
const convert_language = document.getElementById("convert_language");
const flag = document.getElementById("flag");
const text_language = document.getElementById("text_language");
function loadLanguage(languageCode) {
  // Tải tệp ngôn ngữ dựa trên mã ngôn ngữ
  const fileUrl = languageCode + ".json";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", fileUrl, false);
  xhr.onreadystatechange = async function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Tệp ngôn ngữ đã được tải thành công
      const languageData = JSON.parse(xhr.responseText);
      languageStrings[languageCode] = languageData;
    }
  };
  xhr.send();
}
function switchLanguage(languageCode) {
  // Kiểm tra xem ngôn ngữ đã được tải chưa
  if (languageCode in languageStrings) {
    const elements = document.querySelectorAll("[data-i18n]");
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const key = element.getAttribute("data-i18n");
      // Thay thế văn bản hiện tại bằng chuỗi ngôn ngữ mới
      element.innerHTML = languageStrings[languageCode][key];
    }
  } else {
    // Tải ngôn ngữ nếu chưa được tải
    loadLanguage(languageCode);
  }
}
convert_language.addEventListener("click", () => {
  if (!document.cookie.includes("language=vi")) {
    document.cookie = "language=vi";
    text_language.textContent = "VI";
    flag.src = "/images/co_vietnam.png";
    switchLanguage("vi");
  } else {
    document.cookie = "language=en";
    text_language.textContent = "EN";
    flag.src = "/images/co_anh.jpg";
    switchLanguage("en");
  }
});
loadLanguage("vi");
loadLanguage("en");
