const navbar_item = [...document.getElementsByClassName("navbar_item")];
navbar_item[0].addEventListener("click", () => {
  window.location.assign("/cart_product");
});
navbar_item[1].addEventListener("click", () => {
  window.location.assign("/cart_cooperate");
});
const mode = document.getElementById("mode").value;

if (mode == "product") {
  navbar_item[0].style.backgroundColor = "rgba(126, 255, 56, 0.5)";
} else {
  navbar_item[1].style.backgroundColor = "rgba(126, 255, 56, 0.5)";
}

const back_button = document.getElementById("back_button");
back_button.addEventListener("click", () => {
  window.location.assign("/");
});
