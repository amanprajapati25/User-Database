const mongoose = require('mongoose');
const userInfoSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add the contact name']
    },
    email: {
        type: String,
        required: [true, 'Please add the contact email address']
    },
    phone: {
        type: String,
        required: [true, 'Please add the phone number']
    }
},
    {
        timestamps: true // It should be "timestamps" not "timeStamps"
    });

module.exports = mongoose.model('userInfo', userInfoSchema);
