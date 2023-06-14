const { Schema, model } = require('mongoose');
const Comment = require('./Comment');
const { jobsSchema } = require('./Job');

const usersSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true

    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    comments: [Comment],
    jobs: [jobsSchema],
});

const User = model('User', usersSchema);

module.exports = User;