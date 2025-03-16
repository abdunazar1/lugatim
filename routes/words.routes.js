const { addNewWord, getAllWord, deleteWordById, updateWordById, getWordById } = require("../controller/words.controller")

const router=require("express").Router()

router.post("/", addNewWord)
router.get("/", getAllWord)
router.delete("/:id",deleteWordById)
router.put("/:id",updateWordById)
router.get("/:id",getWordById)

module.exports = router