const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID, // capital ID, important
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback" // redirect to here when user coming back from google
}, (accessToken, refreshToken, profile, done) => {
    console.log("accessToken: ", accessToken);
    console.log("refreshToken", refreshToken);
    console.log("profile", profile);
}));
