import express from "express";
import { check_admin } from "../middleware/check_admin.js";
import { add_item } from "../models/add_user.js";
import { read_user } from "../models/read_user.js";

const router_admin = express.Router();

router_admin.get("/CRUD_database", (req, res) => {
  res.render("form_account_admin");
});

router_admin.post("/CRUD_database", check_admin, read_user);

router_admin.post("/add_item", add_item);

router_admin.use((data, req, res, next) => {
  res.send(data);
});

export { router_admin };
