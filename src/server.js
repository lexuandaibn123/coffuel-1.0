import express from "express";
import dotenv from "dotenv";
import { router_admin } from "./routers/router_admin.js";
import { router } from "./routers/router.js";
import { setViews } from "./config/viewEngine.js";
import { set_bodyParser } from "./config/body-parser.js";

const port = process.env.PORT;

const app = express();

dotenv.config();

setViews(app);
set_bodyParser(app);

app.use("/admin", router_admin);
app.use(router);

app.listen(port, () => {
  console.log("Server is running");
});
