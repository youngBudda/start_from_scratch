const formData = require("form-data");
const Mailgun = require("mailgun.js");
require("dotenv").config();

const { MAILGUN_API_KEY } = process.env;
const { DOMEN } = process.env;

const mailgun = new Mailgun(formData);

const mg = mailgun.client({
  username: "api",
  key: MAILGUN_API_KEY,
});

const sendEmail = async (data) => {
  await mg.messages.create(`${DOMEN}`, { ...data });
  console.log(data);
};

module.exports = sendEmail;
