const { addNewPartOfSpeech, getAllPartOfSpeech, deletePartOfSpeechById, updatePartOfSpeechById, getPartOfSpeechById } = require("../controller/partOfSpeech.controller")

const router=require("express").Router()

router.post("/", addNewPartOfSpeech)
router.get("/", getAllPartOfSpeech)
router.delete("/:id", deletePartOfSpeechById)
router.put("/:id", updatePartOfSpeechById)
router.get("/:id", getPartOfSpeechById)

module.exports = router