// sub model, doesn't need to have it on mongoose.model
const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientSchema = new Schema({
    email: String,
    responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;