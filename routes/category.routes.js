const { addNewCategory, getAllCategory, deleteCategoryById, updateCategoryById, getCategoryById } = require("../controller/category.controller")

const router=require("express").Router()

router.post("/", addNewCategory)
router.get("/", getAllCategory)
router.delete("/:id", deleteCategoryById)
router.put("/:id", updateCategoryById)
router.get("/:id", getCategoryById)

module.exports = router