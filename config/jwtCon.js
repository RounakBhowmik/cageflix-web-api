const jwt = require('jsonwebtoken');
const { USER_LOGIN_CONFIG } = require('./appConfig');

exports.generate_user_login_token = (payload) => {
    return jwt.sign({...payload}, USER_LOGIN_CONFIG.LOGIN_SECRET_KEY);
};