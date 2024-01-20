const mongoose = require("mongoose");

const PORT = 5000;
const app = require("./app");

const DB_HOST =
  "mongodb+srv://admin:admin@cluster00.wonjyqu.mongodb.net/contacts_db?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
