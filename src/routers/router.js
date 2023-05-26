import express from "express";
import multer from "multer";
import { check_signin, check_home } from "../middleware/check_signin.js";
import { sign_in } from "../models/sign_in_account.js";
import { sign_up } from "../models/sign_up_account.js";
import { CompareAccount } from "../services/CRUDService.js";
import { create_product } from "../models/create_product.js";
// import { create_cooperate } from "../models/create_cooperate.js";

const router = express.Router();

const upload = multer({
  dest: "uploads/", // kho lưu trữ tạm thời ( tự tạo và tự xóa )
  limits: {
    fileSize: 5 * 1024 * 1024, // Giới hạn kích thước file là 5MB
  },
});

import { create_user } from "../models/create_user.js";
router.get("/", check_home);

router.get("/sign_up", sign_up);

router.get("/sign_in", sign_in);

router.post("/create_user", create_user, (req, res) => {
  console.log("Create User");
  res.send("200");
});

router.get("/product", check_signin, (req, res) => {
  res.render("product");
});

router.get("/cooperate", check_signin, (req, res) => {
  res.render("cooperate");
});

router.get("/cart", check_signin, (req, res) => {
  res.render("cart");
});

router.post("/compare_user", CompareAccount);

router.post("/create_product", create_product, (req, res) => {
  res.redirect("/");
});

// router.post(
//   "/create_cooperate",
//   upload.array("images", 20),
//   create_cooperate,
//   (req, res) => {
//     res.redirect("/");
//   }
// );
router.post("/create_cooperate", (req, res) => {
  res.redirect("/");
});
router.use((data, req, res, next) => {
  res.send(data);
});

export { router };
