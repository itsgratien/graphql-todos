const mongoose = require('mongoose');

const Todo = mongoose.Schema({
    name:{
        type: String,
        unique: false
    },
    description: {
        type: String,
        unique: false
    }
});

module.exports = mongoose.model('Todo', Todo);
