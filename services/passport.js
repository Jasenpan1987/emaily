const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
    done(null, user.id); // this id is a shortcut to the _id.$oid in mongodb
});

passport.deserializeUser(async (id, done) => {
    const userInDb = await User.findById(id);
    done(null, userInDb);
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID, // capital ID, important
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback", // redirect to here when user coming back from google
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {
    const userInDb = await User.findOne({ googleId: profile.id });
    if(userInDb) {
        return done(null, userInDb);
    }
    
    const newUser = await new User({ googleId: profile.id }).save();
    done(null, newUser);
}));
