
const { Schema, model } = require("mongoose");

const usersScheme = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    phone: {
        type: String,
    },
    role: {
        type: String,
    },
    is_active: {
        type: Boolean,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("Users", usersScheme)



