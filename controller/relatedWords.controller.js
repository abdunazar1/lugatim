const mongoose = require("mongoose");
const { errorHandler } = require("../helpers/error_handler");
const RelatedWords = require("../schemas/RelatedWords");
const {
  relatedWordsValidation,
} = require("../validations/relatedWords.validation");

const addNewRelatedWord = async (req, res) => {
  try {
    const { error, value } = relatedWordsValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }

    const newRelatedWord = await RelatedWords.create(value);
    res
      .status(201)
      .send({ message: "Yangi bog'liq so'z qo'shildi", newRelatedWord });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllRelatedWords = async (req, res) => {
  try {
    const relatedWords = await RelatedWords.find({});
    res.status(200).send({ relatedWords });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getRelatedWordById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "Incorrect ObjectId" });
    }
    const relatedWord = await RelatedWords.findById(id);
    res.send({ relatedWord });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateRelatedWordById = async (req, res) => {
  try {
    const id = req.params.id;
    const { error, value } = relatedWordsValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }

    const updateRelatedWord = await RelatedWords.findByIdAndUpdate(id, value, {
      new: true,
    });

    if (!updateRelatedWord) {
      return res.status(404).send({ error: "Bog'liq so'z topilmadi!" });
    }

    res.send({ message: "Bog'liq so'z yangilandi!", updateRelatedWord });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteRelatedWordById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "Incorrect ObjectId" });
    }
    const deleteRelatedWord = await RelatedWords.findByIdAndDelete(id);

    if (!deleteRelatedWord) {
      return res.status(404).send({ error: "Bog'liq so'z topilmadi" });
    }

    res.send({ message: "Bog'liq so'z o'chirildi", deleteRelatedWord });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewRelatedWord,
  getAllRelatedWords,
  getRelatedWordById,
  updateRelatedWordById,
  deleteRelatedWordById,
};
