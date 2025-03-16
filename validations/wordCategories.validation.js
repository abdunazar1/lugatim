const Joi = require("joi");

exports.wordCategoriesValidation = (body) => {
  const schemaWordCategories = Joi.object({
    word_id: Joi.string().hex().length(24).required().messages({
      "any.required": "word_id majburiy maydon",
    }),
    category_id: Joi.string().hex().length(24).required().messages({
      "any.required": "category_id majburiy maydon",
    }),
  });

  return schemaWordCategories.validate(body, { abortEarly: false });
};
