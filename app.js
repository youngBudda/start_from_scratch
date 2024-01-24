const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();

const moment = require("moment");
const cors = require("cors");
const fs = require("fs/promises");
const authRouter = require("./routes/api/auth");
const contactsRouter = require("./routes/api/contacts");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/contacts", contactsRouter);
app.use(express.static("public"));

app.use(async (req, res, next) => {
  const { method, url } = req;
  const date = moment().format("DD-MM-YYYY_hh:mm:ss");
  await fs.appendFile("./public/server.log", `\n${method} ${url} ${date}`);
  next();
});

app.use((req, res) => {
  res.status(404).json({ message: "Not fucking found" });
});
app.use((err, req, res, next) => {
  console.log(err);
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
