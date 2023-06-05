const socket = io();
const event_click = (div) => {
  div.addEventListener("click", () => {
    let text = div.firstElementChild.textContent;
    socket.emit("reset_count_message", text);
    window.location.assign("/admin/chat/" + text);
  });
};
const sort_arr = (array) => {
  let i,
    j,
    temp,
    length = array.length;
  for (i = 1; i < length; i++) {
    j = i;
    while (
      j > 0 &&
      array[j].user_count_message > array[j - 1].user_count_message
    ) {
      temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
      j--;
    }
  }
};
let array = document.cookie.split(";");
let i;
for (i = 0; i < array.length; i++) {
  let find = array[i].indexOf("admin_techstart_coffuel");
  if (find >= 0) break;
}
let arr2 = array[i].trim();
let user_name = arr2.split("=");
socket.emit("admin_connection", user_name[1]);

socket.on("get_new_message", (arr) => {
  sort_arr(arr);
  console.log(arr);
  arr.forEach((e) => {
    let new_div = document.createElement("div");
    let new_p = document.createElement("p");
    let new_span = document.createElement("span");
    new_p.textContent = e.user_name;
    new_span.textContent = e.user_count_message;
    if (e.user_count_message == 0) {
      new_span.classList.add("not_message");
    } else new_span.classList.add("new_message");
    new_div.appendChild(new_p);
    new_div.appendChild(new_span);
    new_div.classList.add("div_element");
    event_click(new_div);
    document.body.appendChild(new_div);
  });
});
