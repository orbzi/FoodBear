const mongoose = require('mongoose');
const { Schema } = mongoose;
//this will be schema for user, a structured data approach for mongodb with the help of mongoose written
//in node js
const UserSchema = new Schema({
    name: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true

    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('user', UserSchema);