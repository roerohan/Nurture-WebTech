const mongoose = require('mongoose');

var donorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true,
    },
    phone: {
        type: String,
        validate: {
            validator: (v) => {
                var re = /^\d{10}$/;
                return (v == null || v.trim().length < 1) || re.test(v)
            },
            message: 'Provided phone number is invalid.'
        },
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Donor', donorSchema);
