const mongoose = require('mongoose');

const Todo = mongoose.Schema({
    name:{
        type: String,
        unique: false
    },
    description: {
        type: String,
        unique: false
    },
    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Todo', Todo);
