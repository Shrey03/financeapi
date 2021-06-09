const mongoose = require("mongoose");

const Company = new mongoose.Schema({
    image: String,
    title: String,
    para: String

});

module.exports = mongoose.model("Company",Company);