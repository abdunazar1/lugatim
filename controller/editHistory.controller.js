const mongoose = require("mongoose");
const { errorHandler } = require("../helpers/error_handler");
const EditHistory = require("../schemas/EditHistory");

const addNewEditHistory = async (req, res) => {
  try {
    const newEdit = await EditHistory.create(req.body);
    res.status(201).send({ message: "Yangi tahrir tarixi qo'shildi", newEdit });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllEditHistories = async (req, res) => {
  try {
    const editHistories = await EditHistory.find({});
    res.status(200).send({ editHistories });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getEditHistoryById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "Incorrect ObjectId" });
    }
    const editHistory = await EditHistory.findById(id);
    res.send({ editHistory });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateEditHistoryById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedEdit = await EditHistory.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedEdit) {
      return res.status(404).send({ error: "Tahrir tarixi topilmadi!" });
    }
    res.send({ message: "Tahrir tarixi yangilandi!", updatedEdit });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteEditHistoryById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "Incorrect ObjectId" });
    }
    const deletedEdit = await EditHistory.findByIdAndDelete(id);
    if (!deletedEdit) {
      return res.status(404).send({ error: "Tahrir tarixi topilmadi" });
    }
    res.send({ message: "Tahrir tarixi o'chirildi", deletedEdit });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewEditHistory,
  getAllEditHistories,
  getEditHistoryById,
  updateEditHistoryById,
  deleteEditHistoryById,
};
