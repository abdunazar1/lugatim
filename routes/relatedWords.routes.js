const {
  getAllRelatedWords,
  getRelatedWordById,
  updateRelatedWordById,
  deleteRelatedWordById,
  addNewRelatedWord,
} = require("../controller/relatedWords.controller");

const router = require("express").Router();

router.post("/", addNewRelatedWord);
router.get("/", getAllRelatedWords);
router.get("/:id", getRelatedWordById);
router.put("/:id", updateRelatedWordById);
router.delete("/:id", deleteRelatedWordById);

module.exports = router;
