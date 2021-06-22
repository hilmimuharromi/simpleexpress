const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    address: {
        name: String,
        phone: String,
        street: String,
        privince: String,
        City: String,
        Country: String
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    },
    measurements: [
        {
            key: String,
            value: String
        }
    ],
    fabric: {
        key: String,
        value: String
    }
    ,
    customizes: [
        {
            key: String,
            value: String
        }
    ]
});

const transaction = mongoose.model("transaction", transactionSchema);
module.exports = transaction