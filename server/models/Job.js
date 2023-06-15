const { Schema, model } = require('mongoose');
const Comment = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const jobsSchema = new Schema({
    title: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    company: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
        trim: true,
    },
    link: {
        type: String,
        required: true,
        trim: true,
    },
    skills: [
        {
        type: String,
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),

    },
    comments: [Comment]
},

{
    toJSON: {
        getters: true
    },
}
);

const Job = model('Job', jobsSchema);

module.exports = Job;

module.exports.jobsSchema = jobsSchema;