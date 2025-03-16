const Joi = require("joi");

exports.editHistoryValidation = (body) => {
  const schemaEditHistory = Joi.object({
    word_id: Joi.string().hex().length(24).required().messages({
      "any.required": "word_id majburiy maydon",
      "string.hex": "word_id noto'g'ri formatda",
      "string.length": "word_id 24 ta belgidan iborat bo'lishi kerak",
    }),
    user_id: Joi.string().hex().length(24).required().messages({
      "any.required": "user_id majburiy maydon",
      "string.hex": "user_id noto'g'ri formatda",
      "string.length": "user_id 24 ta belgidan iborat bo'lishi kerak",
    }),
    previous_value: Joi.string().required().messages({
      "any.required": "previous_value majburiy maydon",
    }),
    new_value: Joi.string().required().messages({
      "any.required": "new_value majburiy maydon",
    }),
  });

  return schemaEditHistory.validate(body, { abortEarly: false });
};
