const mongoose = require('mongoose')

const customizeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    item: [
        {
            name: String,
            image: String,
            price: Number
        }
    ]
});

const customize = mongoose.model("customize", customizeSchema);
module.exports = customize