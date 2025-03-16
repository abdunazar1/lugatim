const Joi = require("joi");

exports.discussionValidation = (body) => {
  const schemaDiscussion = Joi.object({
    word_id: Joi.string().hex().length(24).required().messages({
      "any.required": "word_id majburiy maydon",
    }),
    user_id: Joi.string().hex().length(24).required().messages({
      "any.required": "user_id majburiy maydon",
    }),
    comment: Joi.string().min(3).max(500).required().messages({
      "any.required": "comment majburiy maydon",
      "string.min": "comment kamida 3 ta belgi bo'lishi kerak",
      "string.max": "comment 500 ta belgidan oshmasligi kerak",
    }),
  });

  return schemaDiscussion.validate(body, { abortEarly: false });
};
