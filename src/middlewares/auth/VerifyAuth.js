const jwt = require("jsonwebtoken");
const { HttpResponse } = require("../../core/utils/Response");
const Account = require("../../v1/models/Account");
require("dotenv").config();
const KEY = process.env.KEY;

const VerifyAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return HttpResponse(res, 401, "No authorization headers set");
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
        return HttpResponse(res, 401, "The user does not exist.");
      }

      if (!user.isVerified) {
        return HttpResponse(res, 401, "User is not verified");
      }

      const userType = user.type;
      const urlType = req.url.split("/")[2];

      if (
        (urlType === "admin" && userType !== "admin") ||
        userType.toLowerCase() !== urlType.toLowerCase()
      ) {
        return HttpResponse(
          res,
          401,
          "You are not authorized to view this content."
        );
      } else {
        next();
      }
    } catch (error) {
      return HttpResponse(res, 500, error.toString());
    }
  } catch (error) {
    return HttpResponse(res, 500, error.toString());
  }
};

module.exports = VerifyAuth;
