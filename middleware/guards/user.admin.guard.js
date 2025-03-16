const { errorHandler } = require("../../helpers/error_handler");

module.exports = function (req, res, next) {
  try {
      if (req.user.role != "admin") {
        return res.status(403).send({ message: "Ruxsat etilmagan foydalanuvchi" });
      }
    const id = req.params.id;
    if (id != req.user.id) {
      return res.status(403).send({
        message: "Faqat shaxsiy malumotlarni ko'rishga ruxsat etiladi!",
      });
    }

    next();
  } catch (error) {
    errorHandler(error, res);
  }
};
