const Joi = require("joi");

/** Create jsonwebroken  */
const generateToken = {
  body: Joi.object({
    user: Joi.string().trim(),
  }),
};

module.exports = {
  generateToken,
};
