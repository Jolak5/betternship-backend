const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const { generate_otp: GenerateOTP } = require("../../../core/utils/common");
const OTP = require("../../models/Otp");
const Account = require("../../models/Account");
const fs = require("fs");
const ejs = require("ejs");
const sendMail = require("../../../core/email/nodemailer");
const moment = require("moment");

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
    const newAccount = await Account.create({
      id,
      userName,
      email,
      password: hash,
      type: "user",
      isVerified: false,
    });

    const otp = GenerateOTP();
    const otpId = uuidv4();
    const currentTime = moment();
    currentTime.add(10, "minutes");
    await OTP.create({
      id: otpId,
      accountId: id,
      data: otp,
      expiresOn: currentTime,
    });

    SendOTPEmail({ otp }, email);
    res.status(201).json({
      statusCode: 1,
      message: `${newAccount.userName} account is successfully created. Please verify your email to continue`,
      data: {
        accountId: id,
      },
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 0,
      message: error.toString(),
    });
  }
};

const SendOTPEmail = (data, email) => {
  try {
    ejs.renderFile(
      "src/core/email/templates/send_otp.html",
      data,
      {},
      (err, string) => {
        if (err) {
          throw new Error(err);
        } else {
          sendMail(email, "Verify Email", string).catch((err) => err);
          console.log("Email");
        }
      }
    );
  } catch (error) {
    return error.toString();
  }
};

console.log(SendOTPEmail("202339"));

module.exports = Signup;
