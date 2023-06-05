import { setCookie } from "./set_cookie.js";

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let user_name = document.getElementById("name").value;
  let user_password = document.getElementById("password").value;
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const text = this.responseText;
    document.cookie = setCookie("admin_techstart_coffuel", text, 0.5);
    window.location.assign("/admin/next_router"); // do khi res.send() không thể next nên dùng dòng này để GET
  };
  xhttp.open("POST", "");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("user_name=" + user_name + "&user_password=" + user_password);
});
