const { Schema, model } = require('mongoose');
const Comment = require('./Comment');

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
    comments: [Comment],
},
{
    toJSON: {
        getters: true

    },
}
);

const Job = model('Job', jobsSchema);

module.exports.Job = Job;

module.exports.jobsSchema = jobsSchema;