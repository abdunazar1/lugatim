const { addNewPronunciation, getAllPronunciation, deletePronunciationById, updatePronunciationById, getPronunciationById } = require("../controller/pronunciation.controller")

const router=require("express").Router()

router.post("/", addNewPronunciation)
router.get("/", getAllPronunciation)
router.delete("/:id", deletePronunciationById)
router.put("/:id", updatePronunciationById)
router.get("/:id", getPronunciationById)

module.exports = router