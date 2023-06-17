const { Schema, model } = require('mongoose');
const Comment = require('./Comment');
const { jobsSchema } = require('./Job');
const bcrypt = require('bcrypt');

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


// set up pre-save middleware to create password
usersSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  usersSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
const User = model('User', usersSchema);

module.exports = User;