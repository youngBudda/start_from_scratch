const { program } = require("commander");
const contacts = require("./db");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts.getAll();
      return console.log(allContacts);
    case "getById":
      const oneContact = await contacts.getById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await contacts.add({ name, phone });
      return console.log(newContact);
    case "updateById":
      const updateContact = await contacts.updateById(id, { title, author });
      return console.log(updateContact);
    case "deleteById":
      const deleteContact = await contacts.updateById(id);
      return console.log(deleteBook);
  }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();
const options = program.opts();
invokeAction(options);
