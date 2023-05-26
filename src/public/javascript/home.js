import { setCookie } from "./set_cookie.js";
const sign_in = document.getElementById("sign_in");
const sign_up = document.getElementById("sign_up");
const sign_out = document.getElementById("sign_out");
const message = document.getElementById("state");
const div_in = document.getElementById("div_in");
const div_out = document.getElementById("div_out");
if (message.value == "login") {
  div_out.style.display = "block";
} else {
  div_in.style.display = "block";
}
sign_in.addEventListener("click", () => {
  window.location.assign("/sign_in");
});

sign_up.addEventListener("click", () => {
  window.location.assign("/sign_up");
});

sign_out.addEventListener("click", () => {
  let text = setCookie("account_techstart_coffuel", "", 0);
  document.cookie = text;
  window.location.assign("/");
});

// xử lý list ảnh

const button = [...document.getElementsByClassName("next_back")];
const list_img = [...document.getElementsByClassName("list_img")];

const next_img = async () => {
  let text = list_img[0].style.left.toString();
  let x = text.slice(0, text.length - 2);
  x = Number(x);
  let y = 0.5;
  let tong = 0;
  let k = await setInterval(() => {
    x = x - y;
    tong += y;
    y = y + 0.225;
    list_img[0].style.left = x + "vw";
    if (parseInt(tong) == 35) {
      check();
      clearInterval(k);
    }
  }, 15);
};

const back_img = async () => {
  let text = list_img[0].style.left.toString();
  let x = text.slice(0, text.length - 2);
  x = Number(x);
  let y = 0.5;
  let tong = 0;
  let k = await setInterval(() => {
    x = x + y;
    tong += y;
    y = y + 0.225;
    list_img[0].style.left = x + "vw";
    if (parseInt(tong) == 35) {
      check();
      clearInterval(k);
    }
  }, 15);
};

const check = () => {
  console.log(list_img[0].style.left.toString().trim());
  if (list_img[0].style.left.toString().trim() == "-140vw")
    button[1].disabled = true;
  else button[1].disabled = false;
  if (list_img[0].style.left.toString().trim() == "1.19904e-14vw")
    // do đây là cộng thập phân nên không chuẩn => chỉ ra số sấp sỉ 0
    button[0].disabled = true;
  else button[0].disabled = false;
};
button[0].disabled = true;

button[0].addEventListener("click", () => {
  back_img();
  if (list_img[0].style.left.toString() == "") button[0].disabled = true;
  else button[0].disabled = false;
});

button[1].addEventListener("click", () => {
  next_img();
});
