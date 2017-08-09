const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
    done(null, user.id); // this id is a shortcut to the _id.$oid in mongodb
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(userInDb => {
            done(null, userInDb);
        });
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID, // capital ID, important
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback" // redirect to here when user coming back from google
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
        .then(userInDb => {
            if(userInDb) {
                // already have the record for this googleId
                done(null, userInDb);
            }else {
                // new user
                new User({ googleId: profile.id })
                    .save()
                    .then(newUser => done(null, newUser));
            }
        });
}));
