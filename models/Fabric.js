const mongoose = require('mongoose')

const fabricSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: String,
    fabricType: String,
    price: String
});

const fabric = mongoose.model("fabric", fabricSchema);
module.exports = fabric