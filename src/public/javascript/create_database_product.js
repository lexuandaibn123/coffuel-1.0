const element = document.getElementById("user_name");
const checkinput = document.getElementById("checkinput");
const button = document.getElementById("button_add");
const message = document.getElementById("message");

button.disabled = true;
checkinput.addEventListener("click", async () => {
  const xhttp = new XMLHttpRequest();
  const text = element.value;
  xhttp.onload = function () {
    if (this.responseText == "Hợp lệ") {
      button.disabled = true;
      message.style.color = "red";
      message.textContent = "Tài khoản không tồn tại";
    } else {
      button.disabled = false;
    }
  };
  xhttp.open("POST", "/admin/check_username");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(`user_name=${text}`);
});
