const Joi = require("joi");

const volunteerAddSchema = Joi.object({
  name: Joi.string().max(255).required().trim(),
  phoneNo: Joi.string().required(),
  skills: Joi.string().required().trim(),
  interest: Joi.string().required().trim(),
  email: Joi.string()
    .max(255)
    .required()
    .trim()
    .email({ minDomainSegments: 2 }),
});

async function addVolunteerValidationMW(req, res, next) {
  const volunteerPayLoad = req.body;

  try {
    await volunteerAddSchema.validateAsync(volunteerPayLoad);
    next();
  } catch (err) {
    err.source = "add volunteer validation middleware";
    next({
      status: 400,
      message: err.details[0].message,
    });
  }
}

module.exports = {
  addVolunteerValidationMW,
};
