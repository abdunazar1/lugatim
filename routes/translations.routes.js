const {
  getAllTranslations,
  getTranslationById,
  updateTranslationById,
  deleteTranslationById,
  addNewTranslation,
} = require("../controller/translations.controller");

const router = require("express").Router();

router.post("/", addNewTranslation);
router.get("/", getAllTranslations);
router.get("/:id", getTranslationById);
router.put("/:id", updateTranslationById);
router.delete("/:id", deleteTranslationById);

module.exports = router;
