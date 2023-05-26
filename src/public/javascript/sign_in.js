import { setCookie } from "./set_cookie.js";
const form = document.getElementById("form");
const user_name = document.getElementById("user_name");
const user_password = document.getElementById("user_password");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (this.responseText == "OK") {
      let text = setCookie(
        "account_techstart_coffuel",
        "techstart_coffuel_" + user_name.value,
        24
      );
      document.cookie = text;
      window.location.assign("/");
    } else {
      message.innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "/compare_user");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(
    `user_name=${user_name.value}&user_password=${user_password.value}`
  );
});
