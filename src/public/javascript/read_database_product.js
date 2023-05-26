const Users = document.getElementById("Users");
const Cooperates = document.getElementById("Cooperates");
Users.addEventListener("click", () => {
  window.location.assign("/admin/read_database_user");
});
Cooperates.addEventListener("click", () => {
  window.location.assign("/admin/read_database_cooperate");
});
