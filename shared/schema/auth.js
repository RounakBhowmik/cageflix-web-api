const joi = require('joi');
exports.user_signup_schema = joi.object({
      first_name: joi.string().alphanum().required("Please enter the First Name."),
      last_name: joi.string().alphanum().required("Please enter the Last Name"),
      email: joi.string().email().required("Please enter the email address"),
      password: joi.string().min(8).max(12).required('Please enter the password'),
      cnf_password: joi.ref('password')
}).required();

exports.user_signin_schema = joi.object({
      email: joi.string().email().required("Please enter the email address"),
      password: joi.string().min(8).max(12).required('Please enter the password'),
}).required();