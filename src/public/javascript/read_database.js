const Products = document.getElementById("Products");
const Cooperates = document.getElementById("Cooperates");
Products.addEventListener("click", () => {
  window.location.assign("/admin/read_database_product");
});
Cooperates.addEventListener("click", () => {
  window.location.assign("/admin/read_database_cooperate");
});
