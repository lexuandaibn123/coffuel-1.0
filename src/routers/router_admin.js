import express from "express";
import { login_admin } from "../middleware/login_admin.js";
import { check_admin } from "../middleware/check_admin.js";
import { create_user } from "../models/create_user.js";
import { read_user } from "../models/read_user.js";
import { update_user_id, update_user } from "../models/update_user.js";
import { delete_user_id, delete_user } from "../models/delete_user.js";
import { checkAccount } from "../services/CRUDService.js";
import { read_product } from "../models/read_product.js";
import { confirm_product } from "../models/confirm_product.js";
import { create_product } from "../models/create_product.js";
import {
  chat_realtime_admin,
  chat_with_user,
} from "../models/chat_realtime.js";

const router_admin = express.Router();

router_admin.get("/", (req, res) => {
  res.render("form_account_admin");
});
router_admin.post("/", login_admin);

router_admin.get("/next_router", check_admin, (req, res) => {
  res.render("next_router");
});
router_admin.get("/read_database_user", check_admin, read_user);

router_admin.get("/read_database_product", check_admin, read_product);

router_admin.get("/read_database_cooperate", check_admin, (req, res) => {
  res.send("Hiện chưa update");
});

router_admin.get("/update_database/:id", check_admin, update_user_id);

router_admin.post("/update_database", check_admin, update_user);

router_admin.get("/delete_database/:id", check_admin, delete_user_id);

router_admin.post("/delete_database", check_admin, delete_user);

router_admin.get("/create_database", check_admin, (req, res) => {
  res.render("create_database");
});

router_admin.post("/create_database", check_admin, create_user, (req, res) => {
  res.redirect("/admin/read_database_user");
});

router_admin.get("/create_database_product", check_admin, (req, res) => {
  res.render("create_database_product");
});

router_admin.post(
  "/create_database_product",
  check_admin,
  create_product,
  (req, res) => {
    res.redirect("/admin/read_database_product");
  }
);
router_admin.get("/confirm_database_product/:id", check_admin, confirm_product);
router_admin.post("/check_username", checkAccount);

router_admin.get("/chat", check_admin, chat_realtime_admin);

router_admin.get("/chat/:name", check_admin, chat_with_user);
router_admin.use((data, req, res, next) => {
  res.send(data);
});

export { router_admin };
