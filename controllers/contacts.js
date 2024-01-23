const { Contact } = require("../models/contact");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (request, response) => {
  const { _id: owner } = request.user;
  const { page = 1, limit = 10 } = request.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "name email");
  response.json(result);
};

const getById = async (request, response) => {
  const { id } = request.params;
  const result = await Contact.findById(id);

  if (!result) {
    throw HttpError(404, "Not found");
  }
  response.json(result);
};

const add = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  res.status(201).json(result);
};

const updateById = async (request, response) => {
  const { id } = request.params;
  const result = await Contact.findByIdAndUpdate(id, request.body, {
    new: true,
  });

  if (!result) {
    throw HttpError(404, "Not found");
  }
  response.json(result);
};

const deleteById = async (request, response) => {
  const { id } = request.params;
  const result = await Contact.findByIdAndDelete(id);
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
