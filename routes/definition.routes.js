const { addNewDefinition, getAllDefinition, deleteDefinitionById, updateDefinitionById, getDefinitionById } = require("../controller/definition.controller")

const router=require("express").Router()

router.post("/", addNewDefinition)
router.get("/", getAllDefinition)
router.delete("/:id", deleteDefinitionById)
router.put("/:id", updateDefinitionById)
router.get("/:id", getDefinitionById)

module.exports = router