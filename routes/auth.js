const express = require('express');
const passport = require('passport');
const { validateBody } = require('../middlewares/others/schemaValidate');
const { user_signup_schema, user_signin_schema } = require('../shared/schema/auth');
const { check_user_signin_email_exist } = require('../middlewares/db/userDBValidate');
const { user_signup, user_signin } = require('../controllers/auth');
const passportConf = require('../middlewares/auth/passposrt');

const authRouter = express.Router();
const passportUserLogin = passport.authenticate('local', {session: false})

authRouter.route('/signin').post(validateBody(user_signin_schema), passportUserLogin, user_signin);
authRouter.route('/signup').post(validateBody(user_signup_schema), check_user_signin_email_exist, user_signup);


module.exports = authRouter;

