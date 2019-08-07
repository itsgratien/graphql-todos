
const Todo = require('../models/Todo');
const mongoose = require('mongoose');
exports.verifyTodos = async (resolve, args, ctx) =>{
    try {
       const check = await Todo.find({postedBy: mongoose.Types.ObjectId(ctx.id)});
        if(check.length === 0){
         throw new Error(JSON.stringify('sorry you are not allowed to perform this action'));
        }
        return resolve();
    } catch (error) {
        throw new Error(JSON.stringify('sorry something wrong please try again man.'));
    }
}
