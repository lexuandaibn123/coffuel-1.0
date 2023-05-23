import express from "express";

const setViews = (app) => {
  app.set("views", "src/views");
  app.set("view engine", "ejs");

  app.use(express.static("src/public"));
};

export { setViews };
