const authRouter = require("../../../v1/routers/auth/auth");

const express = require("express");
const educationRouter = require("../../../v1/routers/education");
const internshipApplicationRouter = require("../../../v1/routers/InternshipApplication"); // Fix the casing here

const router = express.Router();

router.use(authRouter);
router.use(educationRouter);
router.use(internshipApplicationRouter);
module.exports = router;

module.exports = router;
