const { isNull } = require('lodash');
const UserModel = require('../../models/user');

exports.check_user_signin_email_exist = async (req, res, next) => {
    try {
        const { email } = req.value.body;
        const userDetials = await UserModel.findOne({ email: email });
        if (!isNull(userDetials)) {
            return res.status(400).json({
                message: "User already exist with this mail id.",
                status: 0
            });
        }
        next();
    } catch (err) {
        next(err);
    }
}