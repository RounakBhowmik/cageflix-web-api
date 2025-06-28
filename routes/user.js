const express = require("express");
const { isAuthenticate } = require("../middlewares/auth/authenticate");
const { get_user_profile } = require("../controllers/user");


const userRouter = express.Router();

userRouter.route('/profile').get(isAuthenticate, get_user_profile)

module.exports = userRouter;