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

//update todos
exports.Update = async (req,args) => {
    try {
        await Todo.updateOne({_id: args.id},{$set:{
            name: args.name,
            description: args.description
        }});
       const message = 'todos was updated successfully.';
       return {message};
    } catch (error) {
        throw new Error(JSON.stringify('sorry something wrong please try again.'));
    }
}

//delete todos
exports.Destroy = async (req,args) =>{
    try {
        await Todo.deleteOne({_id: args.id});
        const message = 'todos removed successfully.';
        return { message };
    } catch (error) {
        throw new Error(JSON.stringify('sorry something wrong please try again.'));
    }
}