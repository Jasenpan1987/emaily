const passport = require("passport");

module.exports = app => {
    // when user coming in this route, it will pass to passport and use google strategy to handle it
    // "google" strategy will automatically map to GoogleStrategy
    app.get("/auth/google", passport.authenticate("google", {
        scope: ["profile", "email"] // what infomation do we want to pull out from user's google account
    }));

    // when user comeback from google, we will use the CODE to get the user profile from google
    app.get("/auth/google/callback", passport.authenticate("google"));
}
