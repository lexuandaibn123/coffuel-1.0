import express from "express";
import { login_admin } from "../middleware/login_admin.js";
import { check_admin } from "../middleware/check_admin.js";
import { add_item } from "../models/add_user.js";
import { read_user } from "../models/read_user.js";

const router_admin = express.Router();

router_admin.get("/", (req, res) => {
  res.render("form_account_admin");
});
router_admin.post("/", login_admin);

router_admin.get("/CRUD_database", check_admin, read_user);
router_admin.post("/CRUD_database", check_admin, add_item, read_user);

router_admin.use((data, req, res, next) => {
  res.send(data);
});

export { router_admin };
