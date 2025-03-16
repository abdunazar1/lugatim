const mongoose = require("mongoose");
const Category = require("../schemas/Category")

const addNewCategory = async (req, res) => {
  try {
    const { error, value } = categoryValidation(req.body);

    if (error) {
      return errorHandler(error, res);
    }

    const {
      category_id,
      category_name,
      category_description,
      parent_category_id,
      is_active,
    } = value;

    const newCategory = await Category.create({
      category_id,
      category_name,
      category_description,
      parent_category_id,
      is_active,
    });

    res.status(201).send({ message: "Category qo'shildi", newCategory });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllCategory = async (req, res) => {
  try {
    const allCategory = await Category.find({});

    res.status(200).send({ allCategory });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getCategoryById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "Incorrect ObjectId" });
    }
    const category = await Category.findById(id);
    res.send({ category });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "serverda xatolik" });
  }
};

const updateCategoryById = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      category_id,
      category_name,
      category_description,
      parent_category_id,
      is_active,
    } = req.body;

    const updateCategory = await Category.findByIdAndUpdate(
      { _id: id },
      {
        category_id,
        category_name,
        category_description,
        parent_category_id,
        is_active,
      },
      { new: true }
    );

    if (!updateCategory) {
      return res.status(404).send({ error: "Til topilmadi!" });
    }

    res.send({ message: "Category yangilandi!", updateCategory });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Server GetAllUsers" });
  }
};

const deleteCategoryById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "Incorrect ObjectId" });
    }
    const deleteCategory = await Category.findByIdAndDelete({ _id: id });

    if (!deleteCategory) {
      return res.status(404).send({ error: "Category topilmadi" });
    }

    res.send({ deleteCategory });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "serverda xatolik" });
  }
};

module.exports = {
  addNewCategory,
  getAllCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};
