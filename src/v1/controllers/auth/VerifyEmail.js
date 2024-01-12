const { HttpResponse } = require("../../../core/utils/Response");
const jwt = require("jsonwebtoken");
const Account = require("../../models/Account");
const OTP = require("../../models/Otp");
const Op = require("sequelize");
const moment = require("moment");
require("dotenv").config();

const KEY = process.env.KEY;

const VerifyAccount = async (req, res) => {
  try {
    const { accountId } = req.body;
    const { otp } = req.query;
    const account = await Account.findOne({ where: { id: accountId } });
    if (!account) {
      return HttpResponse(res, 401, "Account does not exist");
    }

    const accountOtp = await OTP.findOne({
      where: { accountId: account.id },
    });
    if (!accountOtp) {
      return HttpResponse(res, 400, "No OTP is sent for this account");
    }
    const now = moment();
    const expiredTimeOut = moment(accountOtp.expiresOn);

    if (accountOtp.trialCount >= 5 && now.isAfter(expiredTimeOut)) {
      const timeOut = now.add("10", "minutes");
      await accountOtp.update({ trialCount: 0, expiredTimeOut: timeOut });
    } else if (accountOtp.trialCount >= 5) {
      const remaining = expiredTimeOut.diff(now, "minutes");
      return HttpResponse(
        res,
        400,
        `Wait for ${remaining} minute${remaining > 1 ? "s" : ""} and try again`
      );
    }

    const otpFromDb = accountOtp.data;

    if (Number(otpFromDb) !== Number(otp)) {
      const count = Number(accountOtp.trialCount) + 1;
      await accountOtp.update({ trialCount: count });
      return HttpResponse(res, 400, "OTP mismatch");
    } else {
      await account.update({ isVerified: true });
      await accountOtp.destroy();

      return HttpResponse(res, 200, "Account is successfully verified!");
    }
  } catch (error) {
    return HttpResponse(res, 500, error.toString());
  }
};

module.exports = VerifyAccount;
