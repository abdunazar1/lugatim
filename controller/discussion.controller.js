const mongoose = require("mongoose");
const { errorHandler } = require("../helpers/error_handler");
const Discussion = require("../schemas/Discussion");
const {
  discussionValidation,
} = require("../validations/discussion.validation");

const addNewDiscussion = async (req, res) => {
  try {
    const { error, value } = discussionValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }
    const newDiscussion = await Discussion.create(value);
    res
      .status(201)
      .send({ message: "Yangi muhokama qo'shildi", newDiscussion });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllDiscussions = async (req, res) => {
  try {
    const discussions = await Discussion.find({});
    res.status(200).send({ discussions });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getDiscussionById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "Incorrect ObjectId" });
    }
    const discussion = await Discussion.findById(id);
    res.send({ discussion });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateDiscussionById = async (req, res) => {
  try {
    const id = req.params.id;
    const { error, value } = discussionValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }
    const updatedDiscussion = await Discussion.findByIdAndUpdate(id, value, {
      new: true,
    });
    if (!updatedDiscussion) {
      return res.status(404).send({ error: "Muhokama topilmadi!" });
    }
    res.send({ message: "Muhokama yangilandi!", updatedDiscussion });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteDiscussionById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "Incorrect ObjectId" });
    }
    const deletedDiscussion = await Discussion.findByIdAndDelete(id);
    if (!deletedDiscussion) {
      return res.status(404).send({ error: "Muhokama topilmadi" });
    }
    res.send({ message: "Muhokama o'chirildi", deletedDiscussion });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewDiscussion,
  getAllDiscussions,
  getDiscussionById,
  updateDiscussionById,
  deleteDiscussionById,
};
