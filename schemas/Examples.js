const { Schema, model } = require("mongoose");

const examplesSchema = new Schema(
  {
    word_id: {
      type: Schema.Types.ObjectId,
      ref: "Words",
      required: true,
    },
    example_sentence: {
      type: String,
      required: true,
      trim: true,
    },
    source: {
      type: String,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("Examples", examplesSchema);
