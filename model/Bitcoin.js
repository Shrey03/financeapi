const mongoose = require("mongoose");

const Bitcoin = new mongoose.Schema({
    image: String,
    title: String,
    para: String

});

module.exports = mongoose.model("Bitcoin",Bitcoin);