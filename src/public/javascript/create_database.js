const element = document.getElementById("user_name");
const message = document.getElementById("message");
const checkinput = document.getElementById("checkinput");
const button = document.getElementById("button_add");

button.disabled = true;
checkinput.addEventListener("click", async () => {
  const xhttp = new XMLHttpRequest();
  const text = element.value;
  xhttp.onload = function () {
    if (this.responseText == "Hợp lệ") {
      button.disabled = false;
      message_password.style.color = "rgb(52, 255, 52)";
    } else {
      message.style.color = "rgb(243, 73, 73)";
    }
    message.innerHTML = this.responseText;
  };
  xhttp.open("POST", "/admin/check_username");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(`user_name=${text}`);
});
