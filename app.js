const mongoose = require("mongoose");
const express = require("express");
const app = express();

// const DB_HOST =
//   "mongodb+srv://admin:admin@cluster00.wonjyqu.mongodb.net/contacts_db?retryWrites=true&w=majority";
mongoose
  .connect(DB_HOST)
  .then(() => console.log("db connect suck sex"))
  .catch((error) => console.log(error.message));

// const moment = require("moment");
// const fs = require("fs/promises");
// const cors = require("cors");

// const contactsRouter = require("./routes/api/contacts");

// app.use(cors());
// app.use(express.json());

// app.use("/api/contacts", contactsRouter);

// app.use(async (req, res, next) => {
//   const { method, url } = req;
//   const date = moment().format("DD-MM-YYYY_hh:mm:ss");
//   await fs.appendFile("./public/server.log", `\n${method} ${url} ${date}`);
//   next();
// });

// app.use((req, res) => {
//   res.status(404).json({ message: "Not fucking found" });
// });
// app.use((err, req, res, next) => {
//   const { status = 500, message = "Server error" } = err;
//   res.status(status).json({ message });
// });

module.exports = app;
