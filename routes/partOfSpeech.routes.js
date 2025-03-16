const {
  addNewPartOfSpeech,
  getAllPartOfSpeech,
  deletePartOfSpeechById,
  updatePartOfSpeechById,
  getPartOfSpeechById,
} = require("../controller/partOfSpeech.controller");

const userAdminGuard = require("../middleware/guards/user.admin.guard");
const userGuard = require("../middleware/guards/user.guard");

const router = require("express").Router();

router.post("/", userAdminGuard, addNewPartOfSpeech);
router.get("/", getAllPartOfSpeech);
router.get("/:id", getPartOfSpeechById);
router.put("/:id", userAdminGuard, updatePartOfSpeechById);
router.delete("/:id", userAdminGuard, deletePartOfSpeechById);

module.exports = router;
