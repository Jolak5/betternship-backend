const authRouter = require("../../../v1/routers/auth/auth");

const express = require("express");
const educationRouter = require("../../../v1/routers/education");

const router = express.Router();

router.use(authRouter);
router.use(educationRouter);
module.exports = router;

module.exports = router;
