import { io } from "../server.js";
import { convert_back } from "../services/JWT.js";
const chat_realtime = () => {
  io.on("connection", (socket) => {
    console.log("User connecting");

    socket.on("text_chat", (obj) => {
      let room = convert_back(obj.room);
      socket.join(room);
      io.to(room).emit("text_chat", { message: obj.message, user: true });
    });
    socket.on("text_chat_admin", (text) => {
      io.to("dai").emit("text_chat", { message: text, user: false });
    });
    socket.on("joinRoom", (room) => {
      socket.join(room);
    });
  });
};

const chat_realtime_admin = (req, res) => {
  res.render("chat_admin");
};

export { chat_realtime, chat_realtime_admin };
