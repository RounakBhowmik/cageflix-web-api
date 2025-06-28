const bcrypt = require('bcrypt');
const UserModel = require("../models/user");
const { isEmpty } = require('lodash');
const { generate_user_login_token } = require('../config/jwtCon');

exports.user_signup = async (req, res, next) => {
    try {
        const { first_name, last_name, email, password } = req.value.body;
        const hashPassword = await bcrypt.hash(password, 10);
        const user = new UserModel({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: hashPassword,
        });
        await user.save().then(async () => {
            return res.status(200).json({
                message: "User is signup sucessfully.",
                status: 1
            });
        }).catch(err => {
            next(err);
        });
    } catch (err) {
        next(err);
    }
};


exports.user_signin = async (req, res, next) => {
    try {
        const { user } = req;
        if (isEmpty(user)) {
            return res.status(400).json({
                message: "Invalid Email or Password",
                status: 0
            });
        }
        const token = generate_user_login_token({ email: user.email, user_id: user['_id'] });
        return res.status(200).json({
            message: "User is signin sucessfully.",
            data: {
                token: token
            },
            status: 1
        });
    } catch (err) {
        next(err);
    }
}