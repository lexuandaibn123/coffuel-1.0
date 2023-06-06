const mode = document.getElementById("mode").value;
const navbar_item = [...document.getElementsByClassName("navbar_item")];
const navbar_container = [
  ...document.getElementsByClassName("navbar_container"),
];
const cancel_navbar_container = document.getElementById(
  "cancel_navbar_container"
);
const ba_gach = document.getElementById("ba_gach");
const hr_buy = document.getElementById("hr_buy");
const hr_sale = document.getElementById("hr_sale");
const div_list_item = [...document.getElementsByClassName("div_list_item")][0];
const list = document.getElementById("list");
const arr_list = JSON.parse(list.value);
const list_images = [
  "Viên nén cà phê(kg)",
  "Viên nén sinh khối(túi)",
  "Đồ lưu niệm(đang nghiên cứu)",
  "Vải từ bã cà phê(đang nghiên cứu)",
  "Đồ dùng từ bã cà phê(đang nghiên cứu)",
  "Dầu diesel(đang nghiên cứu)",
];
const list_url = [
  "/images/anh_1.jpg",
  "/images/anh_2.jpg",
  "/images/doluuniem.jpg",
  "/images/vai.jpg",
  "/images/dodung.jpg",
  "/images/daudiesel.jpg",
];

arr_list.forEach((e) => {
  const list_item = document.createElement("div");
  list_item.classList.add("list_item");
  div_list_item.appendChild(list_item);

  const new_img = document.createElement("img");
  let i;
  if (mode == "product") {
    for (i = 0; i < list_images.length; i++) {
      if (list_images[i] == e.user_product) break;
    }
    new_img.src = list_url[i];
  } else new_img.src = "/images/logo_tach_nen_den.png";
  new_img.classList.add("new_img");
  list_item.appendChild(new_img);

  const new_content = document.createElement("div");
  new_content.classList.add("new_content");
  list_item.appendChild(new_content);

  const span_product = document.createElement("span");
  span_product.classList.add("span_product");
  span_product.textContent = e.user_product + " - Số lượng: " + e.user_quantity;
  new_content.appendChild(span_product);

  const p_information = document.createElement("p");
  p_information.classList.add("p_information");
  p_information.textContent =
    "Thông tin: " + e.user_fullname + " - " + e.user_address;
  new_content.appendChild(p_information);

  const p_contact = document.createElement("p");
  p_contact.classList.add("p_contact");
  if (mode == "product")
    p_contact.textContent = "Liên hệ: " + e.user_tel + " - " + e.user_email;
  else
    p_contact.textContent = "Liên hệ: " + e.user_tel + " - " + e.user_company;
  new_content.appendChild(p_contact);

  const p_state = document.createElement("p");
  p_state.classList.add("p_state");
  p_state.textContent = "Trạng thái: " + e.user_state;
  if (e.user_state == "chưa xác nhận") p_state.style.color = "red";
  else p_state.style.color = "green";
  new_content.appendChild(p_state);
});

cancel_navbar_container.addEventListener("click", () => {
  navbar_container[0].style.width = "0";
});

ba_gach.addEventListener("click", () => {
  if (window.innerWidth < 800) navbar_container[0].style.width = "50vw";
  else navbar_container[0].style.width = "20vw";
});
navbar_item[0].addEventListener("click", () => {
  window.location.assign("/cart_product");
});
navbar_item[1].addEventListener("click", () => {
  window.location.assign("/cart_cooperate");
});

if (mode == "product") {
  hr_buy.style.display = "block";
} else {
  hr_sale.style.display = "block";
}

const back_button = document.getElementById("back_button");
back_button.addEventListener("click", () => {
  window.location.assign("/");
});
