const jwt = require("jsonwebtoken");
const User = require("../../v1/models/User");
const Account = require("../../core/v1/models/auth/Account");
require("dotenv").config();
const KEY = process.env.KEY;

const VerifyAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(400).json({
        statusCode: 0,
        message: "No authorization headers set",
      });
    }

    const [_, token] = authorization.split(" ");
    let user = null;
    try {
      const { id, email } = jwt.verify(token, KEY);
      if (id) {
        user = await Account.findOne({
          where: { id },
        });
      } else if (email) {
        user = await Account.findOne({
          where: { email },
        });
      }

      if (!user || user.isTrashed) {
        return res.status(401).json({
          statusCode: 0,
          message: "The user does not exist.",
        });
      }

      if (!user.isVerified) {
        return res.status(401).json({
          statusCode: 0,
          message: "User is not verified",
        });
      }

      const userType = user.type;
      const urlType = req.url.split("/")[2];

      if (
        (urlType === "admin" && userType !== "admin") ||
        userType.toLowerCase() !== urlType.toLowerCase()
      ) {
        return res.status(401).json({
          statusCode: 0,
          message: "You are not authorized to view this content.",
        });
      } else {
        next();
      }
    } catch (error) {
      return res.status(401).json({
        statusCode: 0,
        message: error.toString(),
      });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode: 0,
      message: error.toString(),
    });
  }
};

module.exports = VerifyAuth;
