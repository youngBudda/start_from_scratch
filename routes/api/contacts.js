const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { schemas } = require("../../models/contact");

const {
  isValidId,
  checkBody,
  validateBody,
  authenticate,
} = require("../../middlewares");

router.get("/", authenticate, ctrl.getAll);

router.get("/:id", authenticate, isValidId, ctrl.getById);

router.post(
  "/",
  authenticate,
  checkBody,
  validateBody(schemas.addSchema),
  ctrl.add
);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateById
);

router.delete("/:id", authenticate, isValidId, ctrl.deleteById);

module.exports = router;
