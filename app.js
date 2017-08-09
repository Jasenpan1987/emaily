const express = require("express");
const mongoose = require("mongoose");
const mongoURI = require("./config/keys").mongoURI;

require("./models/User"); // need to have it before we use it
require("./services/passport");

mongoose.connect(mongoURI);

const routes = require("./routes/authRoutes"); 

const app = express();

routes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("app is listening to port " + PORT);
});