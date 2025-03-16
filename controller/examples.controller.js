const mongoose = require("mongoose");
const { errorHandler } = require("../helpers/error_handler");
const Examples = require("../schemas/Examples");
const { examplesValidation } = require("../validations/examples.validation");

const addNewExample = async (req, res) => {
  try {
    const { error, value } = examplesValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }

    const newExample = await Examples.create(value);
    res.status(201).send({ message: "Yangi misol qo'shildi", newExample });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllExamples = async (req, res) => {
  try {
    const examples = await Examples.find({});
    res.status(200).send({ examples });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getExampleById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "Incorrect ObjectId" });
    }
    const example = await Examples.findById(id);
    res.send({ example });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateExampleById = async (req, res) => {
  try {
    const id = req.params.id;
    const { error, value } = examplesValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }

    const updateExample = await Examples.findByIdAndUpdate(id, value, {
      new: true,
    });

    if (!updateExample) {
      return res.status(404).send({ error: "Misol topilmadi!" });
    }

    res.send({ message: "Misol yangilandi!", updateExample });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteExampleById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "Incorrect ObjectId" });
    }
    const deleteExample = await Examples.findByIdAndDelete(id);

    if (!deleteExample) {
      return res.status(404).send({ error: "Misol topilmadi" });
    }

    res.send({ message: "Misol o'chirildi", deleteExample });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewExample,
  getAllExamples,
  getExampleById,
  updateExampleById,
  deleteExampleById,
};
