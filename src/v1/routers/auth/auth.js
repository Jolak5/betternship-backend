const express = require("express");
const Signup = require("../../controllers/auth/Signup");
const Login = require("../../controllers/auth/Login");
const VerifyAccount = require("../../controllers/auth/VerifyEmail");

const authRouter = express.Router();

authRouter.post("/v1/auth/signup", Signup);
authRouter.post("/v1/auth/login", Login);
authRouter.post("/v1/auth/account/verify", VerifyAccount)

module.exports = authRouter;
