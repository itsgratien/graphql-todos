const Todo = require('../models/Todo');
const mongoose = require('mongoose');

exports.Index = async () => {
    try {
        const find = await Todo.find({}).populate('postedBy');
        return find
    } catch (error) {
        return error
    }
}

exports.Store = async (req, args) =>{
    //business logic
    const { user } = req;
    const newTodo = new Todo({
        name: args.name,
        description: args.description,
        postedBy: mongoose.Types.ObjectId(user.id)
    });
    try {
        const create = await newTodo.save();
        return create
    } catch (error) {
        return error
    }
}

//show todo
exports.Show = async(req, args) => {
    try {
        const id = args.id;
        const find = await Todo.findById(id).populate('postedBy');
        return find;
    } catch (error) {
        throw new Error(JSON.stringify('sorry something wrong please try again.'));
    }
}