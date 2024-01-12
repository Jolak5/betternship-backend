const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Account = require('../../models/Account')

const KEY = process.env.KEY;
const Login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    if (!userName || !password) {
      const message =
        !userName && !password
          ? "Please provide a userName and password"
          : !userName
          ? "Please provide a userName"
          : "Please provide a password";

      return res.status(400).json({
        statusCode: 0,
        message,
      });
    }
    const account = await Account.findOne({ where: { userName } });

    if (!account) {
      return res.status(400).json({
        statusCode: 0,
        message: "User cannot be found",
      });
    }
    const hashed = account.password;
    console.log(hashed, password);
    const decrypt = bcrypt.compareSync(password, hashed);

    if (!decrypt) {
      return res.status(401).json({
        statusCode: 2,
        message: "Password is incorrect",
      });
    }

    const payload = {
      id: account.id,
      email: account.email,
    };

    try {
      const token = jwt.sign(payload, KEY);

      const lastLogin = new Date();
      await account.update({ lastLogin });

      res.status(200).json({
        statusCode: 1,
        message: "Account sign-in successful",
        token,
      });
    } catch (error) {
      res.status(500).json({
        statusCode: 0,
        message: error.toString(),
      });
    }
  } catch (error) {
    res.status(500).json({
      statusCode: 0,
      message: error.toString(),
    });
  }
};

module.exports = Login;
