const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");

const keys = require("./config/keys");

require("./models/User"); // need to have it before we use it
require("./services/passport");

mongoose.connect(keys.mongoURI);

const authRoutes = require("./routes/authRoutes"); 
const billingRoutes = require("./routes/billingRoutes");

const app = express();

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        keys: [keys.cookieKey] // encrypt the cookie string
    })
);

app.use(passport.initialize()); // initialize the passport
app.use(passport.session()); // enable passport session

authRoutes(app);
billingRoutes(app);

if (process.env.NODE_ENV === 'production') {
    // express will serve up production assets (main.js or main.css ...)
    app.use(express.static("client/build"));
    // express will always serve up the index.html file if it doesn't recogonize the route
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("app is listening to port " + PORT);
});