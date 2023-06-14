
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dustinswecker:passwordsaredumb@cluster0.lydzm8d.mongodb.net/jobdropper?retryWrites=true&w=majority' || 'mongodb://localhost/jobdropper');
module.exports = mongoose.connection;