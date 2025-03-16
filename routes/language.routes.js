const { addNewLanguage, getAllLanguage, deleteLanguageById, updateLanguageById, getLanguageById } = require("../controller/language.controller")

const router=require("express").Router()

router.post("/", addNewLanguage)
router.get("/", getAllLanguage)
router.delete("/:id", deleteLanguageById)
router.put("/:id", updateLanguageById)
router.get("/:id", getLanguageById)

module.exports = router