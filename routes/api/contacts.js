const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { schemas } = require("../../models/contact");

const { isValidId, checkBody, validateBody } = require("../../middlewares");

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", checkBody, validateBody(schemas.addSchema), ctrl.add);

router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrl.updateById);

router.delete("/:id", isValidId, ctrl.deleteById);

module.exports = router;
