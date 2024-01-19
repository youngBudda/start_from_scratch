const ctrlWrapper = require("../helpers/ctrlWrapper");
const { HttpError } = require("../helpers/index");
const contacts = require("../models/contacts");

const getAll = async (request, response) => {
  const result = await contacts.getAll();
  response.json(result);
};

const getById = async (request, response) => {
  const { id } = request.params;
  const result = await contacts.getById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  response.json(result);
};

const add = async (req, res) => {
  const result = await contacts.add(req.body);
  res.status(201).json(result);
};

const updateById = async (request, response) => {
  const { id } = request.params;
  const result = await contacts.updateById(id, request.body);

  if (!result) {
    throw HttpError(404, "Not found");
  }
  response.json(result);
};

const deleteById = async (request, response) => {
  const { id } = request.params;
  const result = await contacts.deleteById(id);
  if (!result) {
    throw new HttpError(404, "Not found");
  }
  response.json({ message: "Delete suck sex" });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
};
