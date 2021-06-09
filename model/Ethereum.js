const mongoose = require("mongoose");

const Ethereum = new mongoose.Schema({
    image: String,
    title: String,
    para: String

});

module.exports = mongoose.model("Ethereum",Ethereum);