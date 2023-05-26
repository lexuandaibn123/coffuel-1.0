const Purchases = document.getElementById("Purchases");
const Sales = document.getElementById("Sales");

Purchases.addEventListener("click", () => {
  window.location.assign("/admin/read_database_purchase");
});
Sales.addEventListener("click", () => {
  window.location.assign("/admin/read_database_sale");
});
