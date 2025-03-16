const Joi = require("joi");

exports.categoryValidation = (body) => {
  const schema = Joi.object({
    category_id: Joi.number().integer().positive().required().messages({
      "number.base": "Kategoriya ID raqam bo'lishi kerak",
      "number.integer": "Kategoriya ID butun son bo'lishi kerak",
      "number.positive": "Kategoriya ID musbat bo'lishi kerak",
      "any.required": "Kategoriya ID kiritilishi shart",
    }),

    category_name: Joi.string().min(3).max(100).required().messages({
      "string.base": "Kategoriya nomi satr bo'lishi kerak",
      "string.empty": "Kategoriya nomi bo'sh bo'lishi mumkin emas",
      "string.min": "Kategoriya nomi kamida 3 ta belgi bo'lishi kerak",
      "string.max": "Kategoriya nomi 100 ta belgidan oshmasligi kerak",
      "any.required": "Kategoriya nomi kiritilishi shart",
    }),

    category_description: Joi.string().min(3).max(500).required().messages({
      "string.base": "Kategoriya tavsifi satr bo'lishi kerak",
      "string.empty": "Kategoriya tavsifi bo'sh bo'lishi mumkin emas",
      "string.min": "Kategoriya tavsifi kamida 3 ta belgi bo'lishi kerak",
      "string.max": "Kategoriya tavsifi 500 ta belgidan oshmasligi kerak",
      "any.required": "Kategoriya tavsifi kiritilishi shart",
    }),

    parent_category_id: Joi.number().integer().positive().required().messages({
      "number.base": "Ota kategoriya ID raqam bo'lishi kerak",
      "number.integer": "Ota kategoriya ID butun son bo'lishi kerak",
      "number.positive": "Ota kategoriya ID musbat bo'lishi kerak",
      "any.required": "Ota kategoriya ID kiritilishi shart",
    }),

    is_active: Joi.boolean().required().messages({
      "boolean.base": "Faollik qiymati true yoki false bo'lishi kerak",
      "any.required": "Faollik qiymati kiritilishi shart",
    }),
  });

  return schema.validate(body);
};
