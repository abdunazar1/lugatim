const mongoose = require("mongoose");
const { errorHandler } = require("../helpers/error_handler");
const Users = require("../schemas/Users");
const { usersValidation } = require("../validations/users.validation");
const jwt = require("jsonwebtoken");
const config = require("config");

const bcrypt = require("bcrypt");

const addNewUser = async (req, res) => {
  try {
    console.log(req.body);

    const { error, value } = usersValidation(req.body);

    if (error) {
      return errorHandler(error, res);
    }

    const {
      username,
      first_name,
      last_name,
      email,
      password,
      confirm_password,
      phone,
      role,
      is_active,
    } = value;
    const hashedPassord = bcrypt.hashSync(password, 7);

    // const newUser = await Users.create({
    //   username,
    //   first_name,
    //   last_name,
    //   email,
    //   password: hashedPassord,
    //   phone,
    //   role,
    //   is_active,
    // });
    const newUser = await Users.create({
      ...value,
      password: hashedPassord,
    });

    res.status(201).send({ message: "Yangi user qo'shildi", newUser });
  } catch (error) {
    errorHandler(error, res);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    //Indentification
    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(400).send({ message: "Email yoki password hato" });
    }
    //autentifikatsiya
    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).send({ message: "Email yoki password hato" });
    }
    const payloat = {
      is: user._id,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(payloat, config.get("tokenKey"), {
      expiresIn: config.get("tokenTime"),
    });
    //avtorizatsiya
    res.status(200).send({ message: "Tizimga xush kelibsiz", token });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const user = await Users.find({});
    if (!user) {
      return res.status(400).send({ message: "User foydalanuvchi topilmadi" });
    }
    res.status(201).send({ user });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Users.findById(id);
    if (!user) {
      return res.status(400).send({ message: "foydalanuvchi topilmadi" });
    }
    res.send({ user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "serverda xatolik" });
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      username,
      first_name,
      last_name,
      email,
      password,
      confirm_password,
      phone,
      role,
      is_active,
    } = req.body;

    const updateUser = await Users.findByIdAndUpdate(
      { _id: id },
      {
        username,
        first_name,
        last_name,
        email,
        password,
        confirm_password,
        phone,
        role,
        is_active,
      },
      { new: true }
    );

    if (!updateUser) {
      return res.status(404).send({ error: "USer topilmadi!" });
    }

    res.send({ message: "User yangilandi!", updateUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Server GetAllUsers" });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "Incorrect ObjectId" });
    }
    const deleteUser = await Users.findByIdAndDelete({ _id: id });

    if (!deleteUser) {
      return res.status(404).send({ error: "User topilmadi" });
    }

    res.send({ deleteUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "serverda xatolik" });
  }
};

module.exports = {
  addNewUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  loginUser,
};
