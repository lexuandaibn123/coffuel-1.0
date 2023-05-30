const content_chat = document.getElementById("content_chat");
const form_chat = document.getElementById("form_chat");
const text = document.getElementById("chat");

const socket = io();
const room = "dai";
socket.emit("joinRoom", room);
socket.on("text_chat", (mess) => {
  const li = document.createElement("li");
  if (mess.user == true) {
    li.textContent = "User: " + mess.message;
    li.classList.add("li_chat_user");
  } else {
    li.textContent = "Admin: " + mess.message;
    li.classList.add("li_chat_admin");
  }
  content_chat.appendChild(li);
});

form_chat.addEventListener("submit", (e) => {
  e.preventDefault();
  socket.emit("text_chat_admin", text.value);
  text.value = "";
});
