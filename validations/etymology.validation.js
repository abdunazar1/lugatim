const Joi = require("joi");

exports.etymologyValidation = (body) => {
  const schema = Joi.object({
    etymology_id: Joi.number().integer().positive().required().messages({
      "number.base": "Etimologiya ID raqam bo'lishi kerak",
      "number.integer": "Etimologiya ID butun son bo'lishi kerak",
      "number.positive": "Etimologiya ID musbat bo'lishi kerak",
      "any.required": "Etimologiya ID kiritilishi shart",
    }),

    word_id: Joi.number().integer().positive().required().messages({
      "number.base": "So'z ID raqam bo'lishi kerak",
      "number.integer": "So'z ID butun son bo'lishi kerak",
      "number.positive": "So'z ID musbat bo'lishi kerak",
      "any.required": "So'z ID kiritilishi shart",
    }),

    etymology_text: Joi.string().min(3).max(500).required().messages({
      "string.base": "Etimologiya matni satr bo'lishi kerak",
      "string.empty": "Etimologiya matni bo'sh bo'lishi mumkin emas",
      "string.min": "Etimologiya matni kamida 3 ta belgi bo'lishi kerak",
      "string.max": "Etimologiya matni 500 ta belgidan oshmasligi kerak",
      "any.required": "Etimologiya matni kiritilishi shart",
    }),

    etymology_order: Joi.number().integer().min(1).required().messages({
      "number.base": "Tartib raqami raqam bo'lishi kerak",
      "number.integer": "Tartib raqami butun son bo'lishi kerak",
      "number.min": "Tartib raqami kamida 1 bo'lishi kerak",
      "any.required": "Tartib raqami kiritilishi shart",
    }),

    created_at: Joi.date().timestamp().required().messages({
      "number.base": "Yaratilgan sana timestamp formatida bo'lishi kerak",
      "any.required": "Yaratilgan sana kiritilishi shart",
    }),

    created_by: Joi.number().integer().positive().required().messages({
      "number.base": "Yaratgan foydalanuvchi ID raqam bo'lishi kerak",
      "number.integer": "Yaratgan foydalanuvchi ID butun son bo'lishi kerak",
      "number.positive": "Yaratgan foydalanuvchi ID musbat bo'lishi kerak",
      "any.required": "Yaratgan foydalanuvchi ID kiritilishi shart",
    }),
  });

  return schema.validate(body);
};
