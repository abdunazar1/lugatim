const { errorHandler } = require("../../helpers/error_handler");
const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  try {
    //Guard yoki Polic
    const authorization = req.headers.authorization;

    if (!authorization) {
      return res
        .status(403)
        .send({ message: "Authorization token berilmagan" });
    }

    const bearer = authorization.split(" ")[0];
    const token = authorization.split(" ")[1];

    if (bearer != "Bearer" || !token) {
      return res.status(403).send({ message: "Bearer yoki token berilmagan" });
    }

    const decodedToken = jwt.verify(token, config.get("tokenKey"));
    console.log(decodedToken);

    req.user = decodedToken;
    console.log(req);

    //   if (decodedToken.role != "user") {
    //     return res.status(403).send({ message: "Ruxsat etilmagan foydalanuvchi" });
    //   }
    next();
  } catch (error) {
    errorHandler(error, res);
  }
};
