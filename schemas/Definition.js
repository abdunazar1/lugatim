const { Schema, model } = require("mongoose");

const definitionSchema = new Schema(
  {
    definition_id: {
      type: Number,
      required: true,
      unique: true
    },
    word_id: {
      type: Number,
      required: true
    },
    definition_text: {
      type: String,
      required: true,
      trim: true
    },
    part_of_speech_id: {
      type: String,
      required: true,
      trim: true
    },
    definition_order: {
      type: Number,
      required: true
    },
    created_by: {
      type: Number,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: { createdAt: "created_at", updatedAt: "update_at" } 
  }
);

module.exports = model("Definition", definitionSchema);
