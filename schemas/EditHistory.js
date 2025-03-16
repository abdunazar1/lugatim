const { Schema, model } = require("mongoose");

const editHistorySchema = new Schema(
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
    previous_value: {
      type: String,
      required: true,
    },
    new_value: {
      type: String,
      required: true,
    },
    edited_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("EditHistory", editHistorySchema);
