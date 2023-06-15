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
const list_images_en = [
  "Coffee pellets(kg)",
  "Biomass pellets(bag)",
  "Souvenirs(under research)",
  "Fabric made from coffee waste(under research)",
  "Utensils made from coffee waste(under research)",
  "Diesel oil(under research)",
];
const list_url = [
  "/images/anh_1.jpg",
  "/images/anh_2.jpg",
  "/images/doluuniem.jpg",
  "/images/vai.jpg",
  "/images/dodung.jpg",
  "/images/daudiesel.jpg",
];
const get_list = () => {
  div_list_item.innerHTML = "";
  arr_list.forEach((e) => {
    const list_item = document.createElement("div");
    list_item.classList.add("list_item");
    div_list_item.appendChild(list_item);

    const new_img = document.createElement("img");
    let i;
    if (mode == "product") {
      for (i = 0; i < list_images.length; i++) {
        if (
          list_images[i] == e.user_product ||
          list_images_en[i] == e.user_product
        ) {
          new_img.src = list_url[i];
          break;
        }
      }
    } else new_img.src = "/images/logo_tach_nen_den.png";
    new_img.classList.add("new_img");
    list_item.appendChild(new_img);

    const new_content = document.createElement("div");
    new_content.classList.add("new_content");
    list_item.appendChild(new_content);

    const span_product = document.createElement("span");
    span_product.classList.add("span_product");
    if (!document.cookie || document.cookie.includes("language=vi")) {
      span_product.textContent =
        e.user_product + " - Số lượng: " + e.user_quantity;
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
        p_contact.textContent =
          "Liên hệ: " + e.user_tel + " - " + e.user_company;
      new_content.appendChild(p_contact);

      const p_state = document.createElement("p");
      p_state.classList.add("p_state");
      p_state.textContent = "Trạng thái: " + e.user_state;
      if (e.user_state == "chưa xác nhận") p_state.style.color = "red";
      else p_state.style.color = "green";
      new_content.appendChild(p_state);
    } else {
      span_product.textContent =
        e.user_product + " - Quantity: " + e.user_quantity;
      new_content.appendChild(span_product);

      const p_information = document.createElement("p");
      p_information.classList.add("p_information");
      p_information.textContent =
        "Information: " + e.user_fullname + " - " + e.user_address;
      new_content.appendChild(p_information);

      const p_contact = document.createElement("p");
      p_contact.classList.add("p_contact");
      if (mode == "product")
        p_contact.textContent = "Contact: " + e.user_tel + " - " + e.user_email;
      else
        p_contact.textContent =
          "Contact: " + e.user_tel + " - " + e.user_company;
      new_content.appendChild(p_contact);

      const p_state = document.createElement("p");
      p_state.classList.add("p_state");
      if (e.user_state == "chưa xác nhận") {
        p_state.style.color = "red";
        p_state.textContent = "State: Unconfirmed";
      } else {
        p_state.style.color = "green";
        p_state.textContent = "State: Confirmed";
      }
      new_content.appendChild(p_state);
    }
  });
};
document.cookie = "language=vi";
get_list();

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
// xử lý đa ngôn ngữ
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
    get_list();
  } else {
    document.cookie = "language=en";
    text_language.textContent = "EN";
    flag.src = "/images/co_anh.jpg";
    switchLanguage("en");
    get_list();
  }
});
loadLanguage("vi");
loadLanguage("en");
