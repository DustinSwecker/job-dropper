const { Schema } = require('mongoose');

const commentsSchema = new Schema({
    
    commentBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        default: 'anonymous'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),

    },
}, {
    toJSON: {
        getters: true

    },
});

module.exports = commentsSchema;