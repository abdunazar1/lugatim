const mongoose = require("mongoose");
const { errorHandler } = require("../helpers/error_handler");
const WordCategories = require("../schemas/WordCategories");
const {
  wordCategoriesValidation,
} = require("../validations/wordCategories.validation");

const addNewWordCategory = async (req, res) => {
  try {
    const { error, value } = wordCategoriesValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }

    const newWordCategory = await WordCategories.create(value);
    res
      .status(201)
      .send({ message: "Yangi so'z kategoriyasi qo'shildi", newWordCategory });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllWordCategories = async (req, res) => {
  try {
    const wordCategories = await WordCategories.find({});
    res.status(200).send({ wordCategories });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getWordCategoryById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "Incorrect ObjectId" });
    }
    const wordCategory = await WordCategories.findById(id);
    res.send({ wordCategory });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateWordCategoryById = async (req, res) => {
  try {
    const id = req.params.id;
    const { error, value } = wordCategoriesValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }

    const updateWordCategory = await WordCategories.findByIdAndUpdate(
      id,
      value,
      { new: true }
    );

    if (!updateWordCategory) {
      return res.status(404).send({ error: "So'z kategoriyasi topilmadi!" });
    }

    res.send({ message: "So'z kategoriyasi yangilandi!", updateWordCategory });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteWordCategoryById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "Incorrect ObjectId" });
    }
    const deleteWordCategory = await WordCategories.findByIdAndDelete(id);

    if (!deleteWordCategory) {
      return res.status(404).send({ error: "So'z kategoriyasi topilmadi" });
    }

    res.send({ message: "So'z kategoriyasi o'chirildi", deleteWordCategory });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewWordCategory,
  getAllWordCategories,
  getWordCategoryById,
  updateWordCategoryById,
  deleteWordCategoryById,
};
