import dotenv from "dotenv";
import { io } from "../server.js";
import { convert_back } from "../services/JWT.js";
import {
  checkMessages,
  appendMessages,
  cleanMessages,
  getMessages,
  count_new_message,
  reset_count_message,
  get_new_message,
} from "../services/CRUDChat.js";
import e from "express";
dotenv.config();

const chat_realtime = () => {
  io.on("connection", (socket) => {
    console.log("User connecting");

    // sự kiện chat của user
    socket.on("text_chat", async (obj) => {
      let room = await convert_back(obj.room);
      await appendMessages(room, "User:" + obj.message);
      count_new_message(room);
      io.to(room).emit("text_chat", { message: obj.message, user: true });
    });

    // sự kiện admin chat
    socket.on("text_chat_admin", async (obj) => {
      await appendMessages(obj.room, "Admin:" + obj.message);
      io.to(obj.room).emit("text_chat", { message: obj.message, user: false });
    });

    // sự kiện lấy count_message và reset của admin

    socket.on("admin_connection", async (token) => {
      let data = convert_back(token);
      if (data == process.env.COOKIE_ADMIN) {
        let arr = await get_new_message();
        socket.join(data);
        io.to(data).emit("get_new_message", arr);
      }
    });

    socket.on("reset_count_message", (text) => {
      reset_count_message(text);
    });
    // sự kiện để vào room chat
    socket.on("join_room", async (token) => {
      let check = token.split(".");
      let user_name;
      if (check.length == 3) user_name = await convert_back(token);
      else user_name = token;
      await checkMessages(user_name);
      socket.join(user_name);
      socket.join(user_name + "get_data");
      let message = await getMessages(user_name);
      let arr = message.split(process.env.SEPARATOR_CHAR);
      await arr.forEach((e) => {
        if (e.split(":")[0] == "User")
          io.to(user_name + "get_data").emit("text_chat", {
            message: e.slice(5),
            user: true,
          });
        if (e.split(":")[0] == "Admin")
          io.to(user_name + "get_data").emit("text_chat", {
            message: e.slice(6),
            user: false,
          });
      });
      socket.leave(user_name + "get_data");
    });
    // sự kiện clean data
    socket.on("clean_data", async (token) => {
      let user_name = await convert_back(token);
      await cleanMessages(user_name);
    });
  });
};

const chat_realtime_admin = (req, res) => {
  res.render("chat_home");
};

const chat_with_user = (req, res) => {
  res.render("chat_admin", {
    user: req.params.name,
  });
};
export { chat_realtime, chat_realtime_admin, chat_with_user };
