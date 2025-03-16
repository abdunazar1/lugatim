const { Schema, model } = require("mongoose");

const wordCategoriesSchema = new Schema(
  {
    word_id: {
      type: Schema.Types.ObjectId,
      ref: "Words",
      required: true,
    },
    category_id: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("WordCategories", wordCategoriesSchema);
