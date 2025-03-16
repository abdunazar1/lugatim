const Joi = require('joi');

exports.languageValidation = (body) =>{
    const schemaWord = Joi.object({
        name: Joi.string()
        .min(3)
        .message("So'z 3ta harfdan kam bo'lmasligi kerak")
        .max(50)
        .message("So'z 50ta harfdan uzun bo'lmasligi kerak")
        .required()
        .messages({
          "string.empty":"Nameni bo'sh bo'lishi mumkin emas",
          "any.required":"Nameni kiriting",
        }),
        code: Joi.string() 
        .valid("uz", "ar", "en", "ru")
        .required()
        .messages({
            "string.empty": "Til maydoni bo'sh bo'lishi mumkin emas",
            "any.required": "Tilni kiriting",
            "any.only": "Faqat 'uz', 'ar', 'en' yoki 'ru' tillarini qabul qiladi"
        })
      });
      return schemaWord.validate(body)
}