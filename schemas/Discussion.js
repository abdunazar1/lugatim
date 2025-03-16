const { Schema, model } = require("mongoose");

const discussionSchema = new Schema(
  {
    word_id: {
      type: Schema.Types.ObjectId,
      ref: "Words",
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    comment: {
      type: String,
      required: true,
      trim: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("Discussion", discussionSchema);
