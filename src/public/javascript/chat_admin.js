const content_chat = document.getElementById("content_chat");
const form_chat = document.getElementById("form_chat");
const text = document.getElementById("chat");
const user_name = document.getElementById("user_name");
const socket = io();
const room = user_name.value;
socket.emit("join_room", room);
socket.on("text_chat", (mess) => {
  const p = document.createElement("p");
  if (mess.user == true) {
    p.textContent = "User: " + mess.message;
    p.classList.add("p_chat_user");
  } else {
    p.textContent = "Admin: " + mess.message;
    p.classList.add("p_chat_admin");
  }
  content_chat.appendChild(p);
  content_chat.scrollTop = content_chat.scrollHeight;
});

form_chat.addEventListener("submit", (e) => {
  e.preventDefault();
  socket.emit("text_chat_admin", {
    message: text.value,
    room: room,
  });
  text.value = "";
});

window.addEventListener("unload", () => {
  socket.emit("reset_count_message", room);
});
