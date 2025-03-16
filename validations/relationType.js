const Joi = require("joi");

exports.relationTypeValidation = (body) => {
  const schema = Joi.object({
    relation_type_id: Joi.number().integer().positive().required().messages({
      "number.base": "Bog'lanish turi ID raqam bo'lishi kerak",
      "number.integer": "Bog'lanish turi ID butun son bo'lishi kerak",
      "number.positive": "Bog'lanish turi ID musbat bo'lishi kerak",
      "any.required": "Bog'lanish turi ID kiritilishi shart",
    }),

    relation_name: Joi.string().min(3).max(100).required().messages({
      "string.base": "Bog'lanish nomi satr bo'lishi kerak",
      "string.empty": "Bog'lanish nomi bo'sh bo'lishi mumkin emas",
      "string.min": "Bog'lanish nomi kamida 3 ta belgi bo'lishi kerak",
      "string.max": "Bog'lanish nomi 100 ta belgidan oshmasligi kerak",
      "any.required": "Bog'lanish nomi kiritilishi shart",
    }),

    description: Joi.string().min(5).max(500).required().messages({
      "string.base": "Tavsif satr bo'lishi kerak",
      "string.empty": "Tavsif bo'sh bo'lishi mumkin emas",
      "string.min": "Tavsif kamida 5 ta belgi bo'lishi kerak",
      "string.max": "Tavsif 500 ta belgidan oshmasligi kerak",
      "any.required": "Tavsif kiritilishi shart",
    }),
  });

  return schema.validate(body);
};
