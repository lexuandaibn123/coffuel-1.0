const setCookie = (key, value, hour) => {
  let d = new Date();
  d.setTime(d.getTime() + hour * 60 * 60 * 1000);
  document.cookie = key + "=" + value + ";" + "expires=" + d.toUTCString();
};

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
});
document.getElementById("send").addEventListener("click", () => {
  let user_name = document.getElementById("name").value;
  let user_password = document.getElementById("password").value;

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const text = this.responseText;
    setCookie("techstart_coofuel", text, 0.5);
    window.location.assign("/admin/CRUD_database"); // do khi res.send() không thể next nên dùng dòng này để GET
  };
  xhttp.open("POST", "");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("user_name=" + user_name + "&user_password=" + user_password);
});
