const express = require("express");
const Signup = require("../../controllers/auth/Signup");
const Login = require("../../controllers/auth/Login");

const authRouter = express.Router();

authRouter.post("/v1/signup", Signup);
authRouter.post("/v1/login", Login);

module.exports = authRouter;
