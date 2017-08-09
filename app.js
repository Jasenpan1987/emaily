const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

const keys = require("./config/keys");

require("./models/User"); // need to have it before we use it
require("./services/passport");

mongoose.connect(keys.mongoURI);

const routes = require("./routes/authRoutes"); 

const app = express();

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000, // 30 days
        keys: [keys.cookieKey] // encrypt the cookie string
    })
);

app.use(passport.initialize()); // initialize the passport
app.use(passport.session()); // enable passport session

routes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("app is listening to port " + PORT);
});