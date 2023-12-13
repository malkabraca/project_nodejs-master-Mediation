const Joi = require("joi");

const registerSchema = Joi.object({
  name: Joi.string().min(2).max(255).required(),
  phone: Joi.string()
    .regex(new RegExp(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/)).messages({
      "string.pattern.base":
        "The phone number must start with 0 and contain only numbers. You can put - after the third digit",
    }).required(),
  email: Joi.string()
    .regex(
      new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
    )
    .required()
    .messages({
      "string.pattern.base":
        "The email structure is incorrect, the email must contain English letters and @ for example A@gmail.com",
    }),
  password: Joi.string()
    .regex(
      new RegExp(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*.-]).{8,}$/
      )
    )
    .required()
    .messages({
      "string.pattern.base":
        "the password should be supper protected, this mean that its should contain only upper and lower case latter's",
    }),
  isAdmin: Joi.boolean().allow(""),
});

const validateRegisterSchema = (userInput) =>
  registerSchema.validateAsync(userInput);

module.exports = {
  validateRegisterSchema,
};
