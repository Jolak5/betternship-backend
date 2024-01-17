const Education = require("../models/Education");
const Account = require("../models/account");
const { HttpResponse } = require("../../core/utils/Response");
const User = require("../models/User");

const GetAllEducations = async (req, res) => {
  try {
    const { userId } = req.params;

    const educations = await Education.findAll({
      where: { userId },
    });

    if (educations.length === 0) {
      return HttpResponse(res, 200, "No education exists yet.", []);
    }

    return HttpResponse(res, 200, "Eductions successfully fetched", educations);
  } catch (error) {
    return HttpResponse(res, 500, error.toString());
  }
};

const AddEducation = async (req, res) => {
  try {
    const data = req.body;
    const { userId } = req.params;
    const account = await Account.findOne({ where: { id: userId } });
    const user = await User.findOne({ where: { userId } });
    if (!account || !user) {
      return HttpResponse(res, 400, "User not found");
    }
    const educationExist = await Education.findOne({
      where: { userId, ...data },
    });

    if (educationExist) {
      return HttpResponse(res, 400, "Duplicate education detected.");
    }

    const newEducation = await Education.create({ userId, ...data });

    return HttpResponse(
      res,
      201,
      "Education is successfully added",
      newEducation
    );
  } catch (error) {
    HttpResponse(res, 500, error.toString());
  }
};

const UpdateEducation = async (req, res) => {
  try {
    const { data } = req.body;
    const { educationId } = req.params;

    const updatedEducation = await Education.update({
      where: { id: educationId, ...data },
    });

    return HttpResponse(
      res,
      200,
      "Education is successfully updated",
      updatedEducation
    );
  } catch (error) {
    HttpResponse(res, 500, error.toString());
  }
};

const DeleteEducation = async (req, res) => {
  try {
    const { educationId } = req.params;
    const educationExist = await Education.findOne({
      where: { id: educationId },
    });

    if (!educationExist) {
      return HttpResponse(res, 400, "No education exist with that ID");
    }
    await Education.destroy({ where: { id: educationId } });

    HttpResponse(res, 200, "Education is successfully deleted.");
  } catch (error) {
    HttpResponse(res, 500, error.toString());
  }
};

module.exports = {
  GetAllEducations,
  AddEducation,
  UpdateEducation,
  DeleteEducation,
};
