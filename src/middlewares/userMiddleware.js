const Joi = require('joi');

const nameMessage = '"displayName" length must be at least 8 characters long';
const emailMessage = '"email" must be a valid email';
const passwordMessage = '"password" length must be at least 6 characters long';

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
      'string.empty': nameMessage,
      'string.min': nameMessage,
      'any.required': nameMessage,
    }),
  email: Joi.string().email().required().messages({
    'string.empty': emailMessage,
    'string.min': emailMessage,
    'any.required': emailMessage,
  }),
password: Joi.string().min(6).required().messages({
    'string.empty': passwordMessage,
    'string.min': passwordMessage,
    'any.required': passwordMessage,
  }),

});

const validateUser = (req, res, next) => {
  const { displayName, email, password } = req.body;
  console.log(displayName, email, password);
  const { error } = userSchema.validate({ displayName, email, password });
  if (error !== undefined) {
    return res.status(400).json(error.message);
  }
  next();
};

module.exports = { validateUser };