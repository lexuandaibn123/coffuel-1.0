import express from "express";
import http from "http";
import dotenv from "dotenv";
import { router_admin } from "./routers/router_admin.js";
import { router } from "./routers/router.js";
import { setViews } from "./config/viewEngine.js";
import { set_bodyParser } from "./config/body-parser.js";
import { Server } from "socket.io";
import { chat_realtime } from "./models/chat_realtime.js";

const port = process.env.PORT;

const app = express();

const server = http.createServer(app); // cách chạy server mới ngoài app,listen

const io = new Server(server);

dotenv.config();

setViews(app);
set_bodyParser(app);

app.use("/admin", router_admin);
app.use(router);

chat_realtime();

server.listen(port, () => {
  console.log("Server is running");
});

export { io };
