
const { Schema, model } = require("mongoose");

const wordsScheme = new Schema(
  {
    word: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
      lowercase: true
    },
    letter: {
      type: String,
      index: true,
    }
  },
  {
    versionKey: false,
  }
);

module.exports = model("Words", wordsScheme)



