import { setCookie } from "./set_cookie.js";
const sign_in = document.getElementById("sign_in");
const sign_up = document.getElementById("sign_up");
const sign_out = document.getElementById("sign_out");
const message = document.getElementById("state");

if (message.value == "login") {
  sign_out.style.display = "block";
} else {
  sign_in.style.display = "block";
  sign_up.style.display = "block";
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
const item_next_back = [...document.getElementsByClassName("item_next_back")];
let state_item = 0;
item_next_back[state_item].classList.add("scale");

const next_img = async (size) => {
  let text = list_img[0].style.left.toString();
  let x = text.slice(0, text.length - 2);
  state_item = Math.abs(x) / (30 * size);
  item_next_back[state_item].classList.remove("scale");
  item_next_back[state_item + 1].classList.add("scale");
  for (let i = -30 * size; i >= -150 * size; i -= 30 * size) {
    if (x > i && x < i + 30 * size) {
      x = i + 30 * size;
      break;
    }
  }
  let y = 3 * size;
  let tong = 0;
  let k = await setInterval(() => {
    button[1].style.disabled = true;
    x = (x * 1000 - y * 1000) / 1000;
    tong = (tong * 1000 + y * 1000) / 1000;
    y = (y * 1000 - 0.15 * size * 1000) / 1000;
    list_img[0].style.left = x + "vw";
    if (tong == 30 * size) {
      check(size);
      clearInterval(k);
    }
  }, 10);
};

const back_img = async (size) => {
  let text = list_img[0].style.left.toString();
  let x = text.slice(0, text.length - 2);
  state_item = Math.abs(x) / (30 * size);
  item_next_back[state_item].classList.remove("scale");
  item_next_back[state_item - 1].classList.add("scale");
  for (let i = -30 * size; i > -150 * size; i -= 30 * size) {
    if (x > i && x < i + 30 * size) {
      x = i;
      break;
    }
  }
  let y = 3 * size;
  let tong = 0;
  let k = await setInterval(() => {
    button[0].style.disabled = true;
    x = (x * 1000 + y * 1000) / 1000;
    tong = (tong * 1000 + y * 1000) / 1000;
    y = (y * 1000 - 0.15 * size * 1000) / 1000;
    list_img[0].style.left = x + "vw";
    if (tong == 30 * size) {
      check(size);
      clearInterval(k);
    }
  }, 10);
};

const check = (size) => {
  if (list_img[0].style.left.toString().trim() == -150 * size + "vw")
    button[1].disabled = true;
  else button[1].disabled = false;
  if (list_img[0].style.left.toString().trim() == "0vw")
    button[0].disabled = true;
  else button[0].disabled = false;
};
button[0].disabled = true;
let size;
button[0].addEventListener("click", async () => {
  if (window.innerWidth <= 800) size = 2;
  else size = 1;
  await back_img(size);
  if (list_img[0].style.left.toString() == "") button[0].disabled = true;
  else button[0].disabled = false;
  check(size);
});

button[1].addEventListener("click", async () => {
  if (window.innerWidth <= 800) size = 2;
  else size = 1;
  await next_img(size);
  check(size);
});

// các nút ở trang 1
const element = [...document.getElementsByClassName("item_footer")];

element[0].addEventListener("click", () => {
  window.location.assign("/product");
});
element[1].addEventListener("click", () => {
  window.location.assign("/cooperate");
});
element[2].addEventListener("click", () => {
  window.location.assign("/cart_product");
});

// CSS navbar và các phần tử
//document.documentElement.scrollTop // xác định vị trí top

window.addEventListener("scroll", () => {
  let h = document.documentElement.scrollTop;
  let b = window.innerHeight;
  // 100 vh = 798 px = b px  => x vh = h * 100 / b
  const navbar = document.getElementById("navbar");
  const content_b5 = [...document.getElementsByClassName("content_b5")];
  const arr = [sign_in, sign_up, sign_out];
  const height = (h * 100) / b; // bắt đầu từ 0 (vị trí ban đầu)
  if (h > 0) {
    navbar.classList.add("navbar_start");
    navbar.classList.remove("navbar_top");
    navbar.classList.remove("navbar_animation");
    arr.forEach((e) => {
      e.style.borderColor = "white";
      e.style.backgroundColor = "rgba(255, 255, 255, 0)";
    });
  } else {
    navbar.classList.remove("navbar_start");
    navbar.classList.add("navbar_top");
    arr.forEach((e) => {
      e.style.borderColor = "black";
      e.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    });
  }
  // if (height >= 100) {
  //   div_b3[0].classList.add("animation_b3");
  // }
  if (height >= 260) {
    content_b5.forEach((e) => {
      e.classList.add("content_b5_animation");
      // setTimeout(e.classList.remove("content_b5_animation"), 2000);
    });
  }
  //hiện hr navbar
  if (window.innerWidth > 800) {
    const hr_navbar = [...document.getElementsByClassName("hr_navbar")];
    const none_hr_navbar = (i) => {
      for (let j = 0; j < hr_navbar.length; j++) {
        if (j == i) continue;
        hr_navbar[j].style.width = "0";
      }
    };
    const display_hr_navbar = (i) => {
      hr_navbar[i].style.width = "100%";
      hr_navbar[i].style.height = "2px";
      hr_navbar[i].style.backgroundColor = "white";
      none_hr_navbar(i);
    };
    if (height >= 0 && height < 40) {
      display_hr_navbar(0);
      if (height == 0) hr_navbar[0].style.backgroundColor = "black";
    }
    if (height >= 40 && height < 110) {
      display_hr_navbar(1);
    }
    if (height >= 110 && height < 200) {
      display_hr_navbar(2);
    }
    if (height >= 200 && height < 300) {
      display_hr_navbar(3);
    }
    if (height >= 300 && height < 360) {
      display_hr_navbar(4);
    }
    if (height >= 360) {
      display_hr_navbar(5);
    }
  }
});

// Lấy list sản phẩm

window.addEventListener("load", () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let text = this.responseText;
    let arr = JSON.parse(text);
    // console.log(arr);
    const img_item = [...document.getElementsByClassName("img_item")];
    const product_name = document.getElementById("product_name");
    const product_describe = document.getElementById("product_describe");
    const product_price = document.getElementById("product_price");
    const div_content_4 = [...document.getElementsByClassName("div_content_4")];
    const content_4 = [...document.getElementsByClassName("content_4")];
    const cancel_information = document.getElementById("cancel_information");

    cancel_information.addEventListener("click", () => {
      div_content_4[0].classList.remove("animation_div_content_4");
      content_4[0].classList.remove("animation_content_4");
    });
    img_item.forEach((e) => {
      e.addEventListener("click", () => {
        div_content_4[0].classList.add("animation_div_content_4");
        content_4[0].classList.add("animation_content_4");
        let title = e.title;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].product_name == title) {
            product_name.innerHTML = "Tên sản phẩm: " + arr[i].product_name;
            product_describe.innerHTML = "Mô tả: " + arr[i].product_describe;
            product_price.innerHTML = "Giá thành: " + arr[i].product_price;
            break;
          }
        }
      });
    });
  };
  xhttp.open("GET", "/get_list_products");
  xhttp.send();
});

// const span_dynamic = document.getElementById("span_dynamic");
// const arr = ["Liên hệ với chúng tôi", "Coffuel giải pháp an toàn"];
// let i = 0;
// setInterval(() => {
//   i++;
//   span_dynamic.innerHTML = arr[i];
//   if (i == 1) i = -1;
// }, 6000);

// xử lý phần chat
const socket = io();
const div_chat = [...document.getElementsByClassName("div_chat")][0];
const cancel_text = document.getElementById("cancel_chat");
const content_chat = document.getElementById("content_chat");
const form_chat = document.getElementById("form_chat");
const text = document.getElementById("chat");
const icon_chat = document.getElementById("icon_chat");

div_chat.style.height = "0vh";
cancel_text.addEventListener("click", () => {
  div_chat.style.height = "0vh";
  div_chat.style.border = "0";
});

icon_chat.addEventListener("click", () => {
  if (message.value == "login") {
    let arr = document.cookie.split(";");
    let i, find;
    for (i = 0; i < arr.length; i++) {
      find = arr[i].indexOf("account_techstart_coffuel");
      if (find >= 0) break;
    }
    div_chat.style.height = "60vh";
    div_chat.style.border = "2px solid black";
    let arr2 = arr[i].trim();
    let user_name = arr2.split("=");
    if (!content_chat.firstElementChild) socket.emit("join_room", user_name[1]);
    window.addEventListener("unload", (e) => {
      socket.emit("clean_data", user_name[1]);
    });
  } else window.location.assign("/sign_in");
});

socket.on("text_chat", (mess) => {
  const chat_bot_text = document.getElementById("chat_bot");
  if (chat_bot_text) content_chat.removeChild(chat_bot_text);
  const p = document.createElement("p");
  if (mess.user == true) {
    p.textContent = mess.message;
    p.classList.add("p_chat_user");
  } else {
    p.textContent = mess.message;
    p.classList.add("p_chat_admin");
  }
  content_chat.appendChild(p);
  if (mess.state == "post" && mess.user == true) {
    const chat_bot = document.createElement("p");
    chat_bot.id = "chat_bot";
    chat_bot.textContent = "Tin nhắn đã gửi vui lòng chờ admin trả lời";
    content_chat.appendChild(chat_bot);
  }
  content_chat.scrollTop = content_chat.scrollHeight; // luôn hiện tin nhắn cuối
});

form_chat.addEventListener("submit", (e) => {
  e.preventDefault();
  if (document.cookie) {
    let arr = document.cookie.split(";");
    let i;
    for (i = 0; i < arr.length; i++) {
      let find = arr[i].indexOf("account_techstart_coffuel");
      if (find >= 0) break;
    }
    let arr2 = arr[i].trim();
    let user_name = arr2.split("=");
    socket.emit("text_chat", { room: user_name[1], message: text.value });
    text.value = "";
  }
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

// xử lý phần phone

const ba_gach = document.getElementById("ba_gach");
const content_navbar = [
  ...document.getElementsByClassName("content_navbar"),
][0];
const cancel_content_navbar = document.getElementById("cancel_content_navbar");
ba_gach.onclick = () => {
  content_navbar.style.width = "45vw";
};
cancel_content_navbar.onclick = () => {
  content_navbar.style.width = "0";
};
