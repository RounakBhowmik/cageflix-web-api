const jwt = require('jsonwebtoken');
const UserModel = require('../../models/user');
const { USER_LOGIN_CONFIG } = require("../../config/appConfig");
const { isEmpty } = require('lodash');

exports.isAuthenticate = async (req, res, next) => {
    try {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1];;
            if (token && token != ' ') {
                jwt.verify(token, USER_LOGIN_CONFIG.LOGIN_SECRET_KEY, async (deCodeerr, decoded) => {
                    try {
                        if (deCodeerr) {
                            return res.status(401).json({
                                message: "Unauthorized",
                                status: 0,
                            });
                        }
                        const { user_id, email } = decoded;
                        await UserModel.findOne({ __id: user_id }).then(async (user) => {
                            if (isEmpty(user)) {
                                return res.status(401).json({
                                    message: "Unauthorized",
                                    status: 0,
                                });
                            }
                            req.user = user;
                            next();
                        }).catch((err) => {
                            next(error);
                        })
                    } catch (err) {
                        const error = new Error(err);
                        next(error);
                    }
                });
            } else {
                return res.status(401).json({
                    message: "Unauthorized",
                    status: 0,
                });
            }
        } else {
            return res.status(401).json({
                message: "Unauthorized",
                status: 0,
            });
        }
    } catch (err) {
        const error = new Error(err);
        next(error);
    }
};