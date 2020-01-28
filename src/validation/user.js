const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateCollaboraterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
 

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Country field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};