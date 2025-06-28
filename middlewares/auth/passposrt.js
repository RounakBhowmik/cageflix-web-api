const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require('bcrypt');
const UserModel = require('../../models/user');
const { isNull } = require('lodash');

passport.use('local', new LocalStrategy({ usernameField: "email", passwordField: "password" }, async (username, password, done) => {
    try {
        const userDetials = await UserModel.findOne({ email: username });
        if (!isNull(userDetials)) {
            const passwordMatch = await bcrypt.compare(password, userDetials.password);
            if (passwordMatch) {
                return done(null, userDetials);
            }
            return done(null, {});
        }
        return done(null, {});
    } catch (err) {
        return done(err);
    }
}));

