const express = require("express");
const verifyAuth = require("../../middlewares/auth/VerifyAuth");
const {
  getAllApplications,
  getApplicationById,
  createApplication,
  updateApplication,
  deleteApplication,
} = require("../controllers/InternshipApplication");

const internshipApplicationRouter = express.Router();

internshipApplicationRouter.get("/v1/internship-applications", verifyAuth, getAllApplications);

internshipApplicationRouter.get("/v1/internship-applications/:id", verifyAuth, getApplicationById);

internshipApplicationRouter.post("/v1/internship-applications", verifyAuth, createApplication);

internshipApplicationRouter.put("/v1/internship-applications/:id/update", verifyAuth, updateApplication);

internshipApplicationRouter.delete("/v1/internship-applications/:id/delete", verifyAuth, deleteApplication);

module.exports = internshipApplicationRouter;
