const mongoose = require("mongoose");

const Trading = new mongoose.Schema({
    image: String,
    title: String,
    para: String

});

module.exports = mongoose.model("Trading",Trading);