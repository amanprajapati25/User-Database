const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please Add the user name']
    },
    email: {
        type: String,
        required: [true, 'Please Enter the Email'],
        unique: [true, 'Email is already taken']
    },
    password: {
        type: String,
        required: [true, 'Please Enter the Passcode']
    },
},
    {
        timeStamp: true,
    }
)

module.exports = mongoose.model('User', userSchema)