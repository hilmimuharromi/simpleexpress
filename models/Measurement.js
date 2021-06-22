const mongoose = require('mongoose')

const measurementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    videoUrl: String,
});

const measurement = mongoose.model("measurement", measurementSchema);
module.exports = measurement