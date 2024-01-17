const express = require("express");
const verifyAuth = require("../../middlewares/auth/verifyAuth");
const {
  AddEducation,
  UpdateEducation,
  DeleteEducation,
  GetAllEducations,
} = require("../controllers/education");
const educationRouter = express.Router();

educationRouter.get("/v1/user/:userId/education", verifyAuth, GetAllEducations);
educationRouter.post("/v1/user/:userId/education", verifyAuth, AddEducation);
educationRouter.put(
  "/v1/user/:userId/education/:educationId/update",
  verifyAuth,
  UpdateEducation
);
educationRouter.delete(
  "/v1/user/:userId/education/:educationId/delete",
  verifyAuth,
  DeleteEducation
);

module.exports = educationRouter;
