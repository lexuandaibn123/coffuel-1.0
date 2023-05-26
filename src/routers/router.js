import express from "express";
import { check_signin, check_home } from "../middleware/check_signin.js";
import { sign_in } from "../models/sign_in_account.js";
import { sign_up } from "../models/sign_up_account.js";
import { CompareAccount } from "../services/CRUDService.js";

const router = express.Router();

import { create_user } from "../models/create_user.js";
router.get("/", check_home);

router.get("/sign_up", sign_up);

router.get("/sign_in", sign_in);

router.post("/create_user", create_user, (req, res) => {
  console.log("Create User");
  res.send("200");
});

router.post("/compare_user", CompareAccount);

router.use((data, req, res, next) => {
  res.send(data);
});

export { router };
