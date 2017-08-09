const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

// this kind of setup is good for testing, because the model won't be imported 
// multiple times, and for importing the user model, just do mongoose.model('users')
mongoose.model("users", userSchema);
