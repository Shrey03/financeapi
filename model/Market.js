const mongoose = require("mongoose");

const Market = new mongoose.Schema({
    image: String,
    title: String,
    para: String

});

module.exports = mongoose.model("Market",Market);