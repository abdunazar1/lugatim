const { Schema, model } = require("mongoose");

const relatedWordsSchema = new Schema(
  {
    word_id: {
      type: Schema.Types.ObjectId,
      ref: "Words",
      required: true,
    },
    related_word_id: {
      type: Schema.Types.ObjectId,
      ref: "Words",
      required: true,
    },
    relation_type: {
      type: Schema.Types.ObjectId,
      ref: "RelationType",
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("RelatedWords", relatedWordsSchema);
