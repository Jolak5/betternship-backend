const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const Account = require("../../models/Account");

const Signup = async (req, res) => {
  try {
    const { userName, email, password, confirmPassword } = req.body;

    let missedInputs = "";
    Object.entries({
      userName,
      email,
      password,
      confirmPassword,
    }).forEach((i) => {
      if (!i[1]) {
        missedInputs += `| ${i[0]} `;
      }
    });
    if (!userName || !email || !password || !confirmPassword) {
      return res.status(400).json({
        statusCode: 0,
        message: "Please input all required fields.",
        data: missedInputs,
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        statusCode: 0,
        message: "Password does not match",
      });
    }
    const account = await Account.findOne({
      where: {
        [Op.or]: [{ email }, { userName }],
      },
    });

    if (account) {
      return res.status(400).json({
        statusCode: 0,
        message: `Account with username ${account.userName} and email ${account.email} already exist`,
      });
    }

    const rounds = process.env.SALT_ROUND;
    const salt = bcrypt.genSaltSync(Number(rounds));
    const hash = bcrypt.hashSync(password, salt);
    const id = uuidv4();
    const newUser = await Account.create({
      id,
      userName,
      email,
      password: hash,
      type: "user",
      isVerified: false,
    });

    res.status(201).json({
      statusCode: 1,
      message: `${newUser.userName} account is successfully created. Please verify your email to continue`,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 0,
      message: error.toString(),
    });
  }
};

const VerifyAccount = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = Signup;
