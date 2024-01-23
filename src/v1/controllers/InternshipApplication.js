const { InternshipApplication } = require('../models/InternshipApplication');
const { InternshipOptions } = require('../enums/Enums');
const { HttpResponse } = require('../core/utils/Response');

// View all internship applications
const getAllApplications = async (req, res) => {
  try {
    const applications = await InternshipApplication.findAll();
    return HttpResponse(res, 200, 'Internship applications successfully fetched', applications);
  } catch (error) {
    return HttpResponse(res, 500, error.toString());
  }
};

// View a specific internship application by ID
const getApplicationById = async (req, res) => {
  const { id } = req.params;
  try {
    const application = await InternshipApplication.findByPk(id);
    if (!application) {
      return HttpResponse(res, 404, 'Internship application not found');
    } else {
      return HttpResponse(res, 200, 'Internship application successfully fetched', application);
    }
  } catch (error) {
    return HttpResponse(res, 500, error.toString());
  }
};

// Create a new internship application
const createApplication = async (req, res) => {
  const { internDuration, internType, jobTitle, experience, skills, englishProficiency } = req.body;

  try {
    // Validate input values
    if (
      !InternshipOptions.internDuration.includes(internDuration) ||
      !InternshipOptions.internType.includes(internType) ||
      !InternshipOptions.jobTitles.includes(jobTitle) ||
      !InternshipOptions.englishProficiency.includes(englishProficiency)
    ) {
      return HttpResponse(res, 400, 'Invalid input values');
    }

    const newApplication = await InternshipApplication.create({
      internDuration,
      internType,
      jobTitle,
      experience,
      skills,
      englishProficiency,
    });

    return HttpResponse(res, 201, 'Internship application successfully created', newApplication);
  } catch (error) {
    return HttpResponse(res, 500, error.toString());
  }
};

// Update an existing internship application
const updateApplication = async (req, res) => {
  const { id } = req.params;
  const { internDuration, internType, jobTitle, experience, skills, englishProficiency } = req.body;

  try {
    const application = await InternshipApplication.findByPk(id);

    if (!application) {
      return HttpResponse(res, 404, 'Internship application not found');
    } else {
      // Validate input values
      if (
        !InternshipOptions.internDuration.includes(internDuration) ||
        !InternshipOptions.internType.includes(internType) ||
        !InternshipOptions.jobTitles.includes(jobTitle) ||
        !InternshipOptions.englishProficiency.includes(englishProficiency)
      ) {
        return HttpResponse(res, 400, 'Invalid input values');
      }

      // Update application fields
      await application.update({
        internDuration,
        internType,
        jobTitle,
        experience,
        skills,
        englishProficiency,
      });

      return HttpResponse(res, 200, 'Internship application successfully updated', application);
    }
  } catch (error) {
    return HttpResponse(res, 500, error.toString());
  }
};

// Delete an internship application
const deleteApplication = async (req, res) => {
  const { id } = req.params;

  try {
    const application = await InternshipApplication.findByPk(id);

    if (!application) {
      return HttpResponse(res, 404, 'Internship application not found');
    } else {
      await application.destroy();
      return HttpResponse(res, 200, 'Internship application successfully deleted');
    }
  } catch (error) {
    return HttpResponse(res, 500, error.toString());
  }
};

module.exports = {
  getAllApplications,
  getApplicationById,
  createApplication,
  updateApplication,
  deleteApplication,
};
