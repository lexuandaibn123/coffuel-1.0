import express from "express";
import { check_signin, check_home } from "../middleware/check_signin.js";
import { sign_in } from "../models/sign_in_account.js";
import { sign_up } from "../models/sign_up_account.js";
import { CompareAccount } from "../services/CRUDService.js";
import { create_product } from "../models/create_product.js";
import { create_cooperate } from "../models/create_cooperate.js";
import {
  watch_cart_product,
  watch_cart_cooperate,
} from "../models/watch_cart.js";
import { get_list_products } from "../models/get_list_products.js";
import { send_email } from "../models/send_email.js";

const router = express.Router();

import { create_user } from "../models/create_user.js";
router.get("/", check_home);

router.get("/sign_up", sign_up);

router.get("/sign_in", sign_in);

router.post("/create_user", create_user, (req, res) => {
  console.log("Create User");
  res.send("200");
});

router.get("/product", (req, res) => {
  res.render("product");
});

router.get("/cooperate", (req, res) => {
  res.render("cooperate");
});

router.get("/cart_product", watch_cart_product);

router.get("/cart_cooperate", watch_cart_cooperate);

router.post("/compare_user", CompareAccount);

router.post("/create_product", create_product, (req, res) => {
  res.redirect("/");
});

router.post("/create_cooperate", create_cooperate, (req, res) => {
  res.redirect("/");
});

router.get("/get_list_products", get_list_products);

router.get("/send_email_user", send_email);
router.use((data, req, res, next) => {
  res.send(data);
});

export { router };
