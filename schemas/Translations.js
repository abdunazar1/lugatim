const { Schema, model } = require("mongoose");

const translationsSchema = new Schema(
  {
    word_id: {
      type: Schema.Types.ObjectId,
      ref: "Words",
      required: true,
    },
    language_id: {
      type: Schema.Types.ObjectId,
      ref: "Language",
      required: true,
    },
    translation: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("Translations", translationsSchema);
